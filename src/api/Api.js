import { create } from 'apisauce';

const api = create({
  baseURL: 'https://pokeapi.co/api',
  headers: { Accept: 'application/json' }
});

async function apiMethod(method, url, data) {
  return new Promise((resolve, reject) => {
    api[method.toLowerCase()](url, data)
      .then(async (res) => {
        if (!res.ok) {
          return reject(res.data);
        }
        return resolve(res.data);
      })
      .catch(reject);
  });
}

export default {
  get: (url) => apiMethod('get', url, null),
  post: (url, data) => apiMethod('post', url, data),
  put: (url, data) => apiMethod('put', url, data),
  delete: (url) => apiMethod('delete', url, null),
};
