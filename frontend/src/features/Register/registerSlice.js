import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import regUserService, { verifyOTPService } from "./registerService";

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
};

// ===================== Register User =====================
export const regUser = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      return await regUserService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ===================== Verify OTP =====================
export const verifyUserOtp = createAsyncThunk(
  "user/verifyOtp",
  async (otpData, thunkAPI) => {
    try {
      return await verifyOTPService(otpData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      // REGISTER
      .addCase(regUser.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(regUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;

        // Save the correct user object
        state.user = action.payload.user || action.payload;

        // Optional: save to localStorage if needed
        if (state.user) {
          localStorage.setItem("userInfo", JSON.stringify(state.user));
        }

        state.userMessage =
          action.payload.message || "User registered successfully!";
      })

      .addCase(regUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })

      // VERIFY OTP
      .addCase(verifyUserOtp.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(verifyUserOtp.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;
        state.userMessage = action.payload?.message || "OTP Verified!";
      })
      .addCase(verifyUserOtp.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      });
  },
});

export const { userReset } = registerSlice.actions;
export default registerSlice.reducer;
