import { ActionType } from 'redux-promise-middleware';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_FULFILLED = `${FETCH_ITEMS}_${ActionType.Fulfilled}`;

export function fetchItems(id) {
  const getItemsAsync = async () => {
    const response = await fetch(`/api/items?id=${id}`, { method: 'GET' });
    const result = await response.json();
    return { items: result, id };
  };
  return {
    type: FETCH_ITEMS,
    payload: getItemsAsync(),
  };
}
