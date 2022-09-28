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
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.mission_id === action.payload) {
        return { ...mission, reserved: !mission.reserved };
      }
      return mission;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
const { joinMission } = actions;
export { actions, getMissions, joinMission };
export default reducer;
