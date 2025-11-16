import axios from "axios";

const regUserService = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/register",
      userData
    );

    if (response.data) {
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Registration failed. Please try again."
    );
  }
};

export default regUserService;
