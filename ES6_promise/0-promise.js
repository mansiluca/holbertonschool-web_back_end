export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fulfilled');
    }, 100);
  });
}
