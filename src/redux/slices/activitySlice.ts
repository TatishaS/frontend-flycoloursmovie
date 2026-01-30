import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axios";

export const StatusEnum = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum];

export interface IActivity {
  _id: string;
  user: string;
  type: string;
  title: string;
  description: string;
  imageUrl: string;
  originalLanguage: string;
  subtitlesLanguage: string;
  date: string;
  time: string;
  free: boolean;
  price: number;
  duration: number;
  occupiedSeats: string[];
}

export interface ActivityState {
  activities: IActivity[];
  status: StatusEnum;
}

const initialState: ActivityState = {
  activities: [],
  status: StatusEnum.LOADING,
};

export const fetchActivities = createAsyncThunk<IActivity[]>(
  "activities/fetchActivities",
  async () => {
    const response = await axiosInstance.get<IActivity[]>("/activities");
    return response.data;
  }
);

export const activitySlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    clearActivities: (state) => {
      state.activities = [];
      state.status = StatusEnum.SUCCESS;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchActivities.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(
      fetchActivities.fulfilled,
      (state, action: PayloadAction<IActivity[]>) => {
        state.status = StatusEnum.SUCCESS;
        state.activities = action.payload;
      }
    );
    builder.addCase(fetchActivities.rejected, (state) => {
      state.status = StatusEnum.ERROR;
      state.activities = [];
    });
  },
});

export const { clearActivities } = activitySlice.actions;

export default activitySlice.reducer;
