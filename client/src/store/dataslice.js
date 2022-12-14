import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    username: "",
    roomId: "",
    socket: {}
  },
  reducers: {
    setData: (state, action) => {
        state.roomId = action.payload.roomId
        state.username = action.payload.username
        state.socket = action.payload.socket
    }
  }
});


export const { setData } = dataSlice.actions

export default dataSlice.reducer