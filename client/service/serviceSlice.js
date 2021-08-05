import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import serviceAPI from './serviceAPI';

const initialState = {
  activeFilters: [],
  isAllFilters: false,
  isOrdersVisible: false,
  data: {
    selectedCategory: null,
    categories: [],
    items: [],
    orders: [],
    filters: [],
    discounts: [],
  },
};

export const init = createAsyncThunk('service/init', async () => {
  const data = {};
  const requests = ['categories', 'orders', 'filters', 'discounts'];

  await Promise.allSettled(
    requests.map(async (elem) => {
      const response = await serviceAPI.getDataAsync(`/${elem}`);
      data[elem] = response.data;
    }),
  );

  data.selectedCategory = data.selectedCategory ?? data.categories[0]?._id;
  const response = await serviceAPI.getDataAsync('/items', { id: data.selectedCategory });
  data.items = response.data;
  return data;
});

export const fetchItems = createAsyncThunk('service/fetchData', async (id) => {
  const response = await serviceAPI.getDataAsync('/items', { id });
  return { items: response.data, id };
});

export const postOrder = createAsyncThunk('service/postOrder', async (id) => {
  const response = await serviceAPI.postOrder(id, Date.now());
  return response.data;
});

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    switchAll: (state) => {
      state.isAllFilters = !state.isAllFilters;
    },
    switchOrders: (state) => {
      state.isOrdersVisible = !state.isOrdersVisible;
    },
    switchFilter: (state, action) => {
      const filters = state.activeFilters.slice();
      const id = action.payload;
      const idx = filters.findIndex((elem) => elem === id);
      if (idx === -1) {
        filters.push(id);
      } else {
        filters.splice(idx, 1);
      }
      state.activeFilters = filters;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(init.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.data.orders = action.payload;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.data.selectedCategory = action.payload.id;
        state.data.items = action.payload.items;
      });
  },
});

export const selectByPropName = (prop) => (state) => state.service[prop];

export const { switchAll, switchOrders, switchFilter } = serviceSlice.actions;

export default serviceSlice.reducer;
