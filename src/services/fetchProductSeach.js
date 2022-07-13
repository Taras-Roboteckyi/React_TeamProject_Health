import axios from 'axios';

export const fetchProductSearch = async productName => {
  let correctProdName = productName;
  if (productName.includes('%')) {
    correctProdName = productName.slice(0, productName.length - 1);
  }

  if (productName.includes('(') && productName.includes(')')) {
    correctProdName = productName.slice(
      productName.indexOf('(') + 1,
      productName.indexOf(')'),
    );
  }
  try {
    const { data } = await axios(
      `https://health-projectbackend.herokuapp.com/api/products/search/${correctProdName}`,
    );

    const variantsList = data.slice(0, 20);
    return variantsList;
  } catch (error) {
    const msg =
      error.response.status === 400
        ? 'Такого товару в базі немає'
        : 'Некоректна назва продукту, введіть інше значення і виберіть продукт із переліку.';
    return msg;
  }
};
