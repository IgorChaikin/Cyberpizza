import { ActionType } from 'redux-promise-middleware';

export const ActionsInit = 'ActionsInit';
export const INIT_FULFILLED = `${ActionsInit}_${ActionType.Fulfilled}`;

export function init() {
  const payload = new Promise((resolve) => {
    const data = {};
    const requests = ['categories', 'orders', 'filters', 'discounts'];
    Promise.allSettled(
      requests.map(async (elem) => {
        const response = await fetch(`/api/${elem}`, { method: 'GET' });
        data[elem] = await response.json();
      })
    )
      .then(() => {
        data.selectedCategory = data.categories[0]?._id;
        return fetch(`/api/items?id=${data.selectedCategory}`, { method: 'GET' }).then((response) =>
          response.json()
        );
      })
      .then((result) => {
        data.items = result;
      })
      .then(() => {
        resolve(data);
      });
  });

  return {
    type: ActionsInit,
    payload,
  };
}
