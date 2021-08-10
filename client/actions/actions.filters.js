export const SWITCH_ALL = 'SWITCH_ALL';
export const SWITCH_FILTER = 'SWITCH_FILTER';

export function switchAll() {
  return { type: SWITCH_ALL };
}

export function switchFilter(id) {
  return {
    type: SWITCH_FILTER,
    payload: id,
  };
}
