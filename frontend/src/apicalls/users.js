import axiosInstance from ".";

export const registerUser = async(payload) => {
    try{
      const response = await axiosInstance.post("/api/auth/register", payload);
      return response.data
    }
    catch(error){
      return error.response.data
    }
}

export const loginUser = async(payload) => {
    try{
      const response = await axiosInstance.post("/api/auth/login", payload);
      return response.data
    }
    catch(error){
      return error.response.data
    }
}

export const getUserInfo = async() => {
  try{
    const response = await axiosInstance.post("/api/auth/get-user-info");
    return response.data
  }
  catch(error){
    return error.response.data
  }
}