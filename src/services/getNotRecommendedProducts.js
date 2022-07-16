import axios from 'axios';

axios.defaults.baseURL = 'https://health-projectbackend.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getPublicProducts = async data => {
  const products = await axios({
    method: 'post',
    url: `/api/products/public/${data.bloodType}`,
    data,
  });
  return products;
};

export const getPrivateProducts = async data => {
  const products = await axios({
    method: 'post',
    url: `/api/products/private/${data.bloodType}`,
    data,
  });
  return products;
};
