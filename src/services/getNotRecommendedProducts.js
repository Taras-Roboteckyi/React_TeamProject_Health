import axios from 'axios';

axios.defaults.baseURL = 'https://health-projectbackend.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getPublicProducts = async data => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: data,
  // };
  // const url = `/api/products/public/${data.bloodType}`;

  // const dt = data;

  // const products = await axios.get(url, dt, config);

  const products = await axios.get(
    `/api/products/public/${data.bloodType}`,
    data,
  );
  return products;
};

export const getPrivateProducts = async data => {
  const products = await axios.get(
    `/api/products/private/${data.bloodType}`,
    data,
  );
  return products;
};
