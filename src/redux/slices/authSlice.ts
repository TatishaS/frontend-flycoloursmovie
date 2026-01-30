import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axios";
import type { RootState } from "../store";

export const StatusEnum = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum];

export interface IUser {
  _id: string;
  fullname: string;
  email: string;
  group: string;
  role: string;
  bookings: Array<any>;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface IUserData {
  email: string;
  fullname: string;
  password: string;
  group: string;
}

export interface AuthState {
  user: any;
  status: StatusEnum;
}

const initialState: AuthState = {
  user: null,
  status: StatusEnum.LOADING,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: IUserData) => {
    console.log(data);
    const response = await axiosInstance.post<IUser>("/auth/register", data);
    return response.data;
  },
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.status = StatusEnum.SUCCESS;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.status = StatusEnum.LOADING;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.status = StatusEnum.SUCCESS;
        state.user = action.payload;
      },
    );
    builder.addCase(registerUser.rejected, (state) => {
      state.status = StatusEnum.ERROR;
      state.user = null;
    });
  },
});

export const { clearUser } = authSlice.actions;

export const checkIsAuth = (state: RootState) => Boolean(state.auth.user);

export default authSlice.reducer;
