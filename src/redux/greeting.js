import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/greetings';
/* eslint-disable */
export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', () =>
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => json),
);
/* eslint-enable */
const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => action.payload);
  },
});

export default greetingSlice.reducer;
