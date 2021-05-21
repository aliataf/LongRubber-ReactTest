import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "@/services/auth";

const isValidLogin = createAsyncThunk(
  "user/isValidLogin",
  async (phoneNumber) => {
    let data = new URLSearchParams();
    data.append("phone_number", phoneNumber);
    const response = await AuthService.login(data);
    console.log(response);
    return response.status === 200 ? true : false;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    loggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.loggedIn = true;
    },
  },
  extraReducers: {
    [isValidLogin.fulfilled]: (state) => {
      state.loading = false;
    },
    [isValidLogin.pending]: (state) => {
      state.loading = true;
    },
    [isValidLogin.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { login } = userSlice.actions;
export { isValidLogin };
export const selectIsLoggedIn = (state) => state.user.loggedIn;

export default userSlice.reducer;
