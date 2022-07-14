function arrayRandom(array) {
  let result = [];

  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  const arrayLength = 6;
  while (result.length !== arrayLength) {
    //////////перемішує  між собою значення масива
    let index = getRandomInt(array.length);
    result.push(array[index]);
    result = result.filter((v, i, arr) => arr.indexOf(v) === i);
  }
  return result;
}
export default arrayRandom;
