import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors form "./catchErrors";
import Router from "next/router";
import cookie from "js-cookie";


export const registerUser = async (user, ProfilePicUrl, setError, setLoading) => {
  setLoading(true)

  try {
    const res = await axios.post(`${baseUrl}/api/signup`, {user, ProfilePicUrl})
    setToken (res.data)
  } catch (error) {
    const errorMsg = catchErrors(error)
    setError(errorMsg)
  }
}
