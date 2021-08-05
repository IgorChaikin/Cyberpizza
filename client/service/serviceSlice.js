import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import serviceAPI from './serviceAPI';

const initialState = {
  selectedCategory: null,
  categories: [],
  items: [],
  orders: [],
  filters: [],
  discounts: [],
};

export const fetchData = createAsyncThunk('service/fetchData', async (params) => {
  const { url, query, prop } = params;
  const response = await serviceAPI.getDataAsync(url, query);
  return { data: response.data, prop };
});

export const postOrder = createAsyncThunk('service/postOrder', async (params) => {
  const { id, time } = params;
  const response = await serviceAPI.postOrder(id, time);
  return response.data;
});

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state[action.payload.prop] = action.payload.data;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export const selectByPropName = (prop) => (state) => state.service[prop];

export const { setCategory } = serviceSlice.actions;

export default serviceSlice.reducer;
