export default function getResponseFromAPI(boolean) {
  if (!boolean) {
    return Promise.reject(new Error('The fake API is not working currently'));
  }
  return Promise.resolve({
    message: 'API request successful',
    status: 200,
    body: 'Success',
  });
}
