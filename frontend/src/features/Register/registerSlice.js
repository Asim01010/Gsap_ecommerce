import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // ✔ semicolon
import regUserService from "./registerService"; // ✔ semicolon

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
}; // ✔ semicolon at end of variable

// ===================== Thunk =====================
export const regUser = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      return await regUserService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); // ✔ semicolon

// ===================== Slice =====================
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    userReset: (state) => {
      state.user = null;
      state.userLoading = false;
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(regUser.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
        state.userError = false;
        state.userMessage = "User registered successfully!";
      })
      .addCase(regUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      });
  },
}); // ✔ semicolon

export const { userReset } = registerSlice.actions; // ✔ semicolon
export default registerSlice.reducer; // ✔ semicolon
