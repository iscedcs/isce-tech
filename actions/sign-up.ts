import { SignUpFormValues } from "@/components/forms/sign-up-form";
import { AUTH_API, URLS } from "@/lib/const";
import axios from "axios";

const userType = "USER";


export const signup = async (values: SignUpFormValues) => {
    const url = `${AUTH_API}${URLS.auth.sign_up}?userType=${encodeURIComponent(userType)}`;
    try {
      console.log("Sending request to:", url);
      console.log("Payload:", values);
      const res = await axios.post(url, {
        firstName: values.firstname,
        lastName: values.lastname,
        phone: values.phonenumber,
        address: values.address,
        dob: values.dob,
        email: values.email,
        password: values.password.password,
        confirmpassword: values.password.confirmPassword,
      });
      return res.data;
    } catch (e: any) {
      console.error("Signup request failed:", e);

      if(axios.isAxiosError(e)){
        console.error("Axios error message:", e.response?.data);
        return e.response?.data;
      } else {
        console.error("Unexpected error:", e);
        return null;
      }
    }
  };