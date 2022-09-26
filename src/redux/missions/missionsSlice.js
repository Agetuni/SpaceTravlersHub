import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missionList = await response.json();
  return missionList;
});

const initialState = [];

const rocketsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
export { actions, getMissions };
export default reducer;
