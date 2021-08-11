import { ActionType } from 'redux-promise-middleware';

export const ActionsInit = 'ActionsInit';
export const INIT_FULFILLED = `${ActionsInit}_${ActionType.Fulfilled}`;

export function init() {
  const getDataAsync = async () => {
    const data = {};
    const requests = ['categories', 'orders', 'filters', 'discounts'];
    await Promise.allSettled(
      requests.map(async (elem) => {
        const response = await fetch(`/api/${elem}`, { method: 'GET' });
        data[elem] = await response.json();
      })
    );
    data.selectedCategory = data.categories[0]?._id;
    const response = await fetch(`/api/items?id=${data.selectedCategory}`, { method: 'GET' });
    data.items = await response.json();
    return data;
  };

  return {
    type: ActionsInit,
    payload: getDataAsync(),
  };
}
