import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketsList = await response.json();
  return rocketsList;
});
const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => state.map((rocket) => {
      if (rocket.rocket_id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
const { reserveRocket } = actions;
export { actions, getRockets, reserveRocket };
export default reducer;
