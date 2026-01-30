import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/config/axios";

export const StatusEnum = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum];

export interface IBooking {
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

export interface BookingState {
  activities: IBooking[];
  status: StatusEnum;
}
