import { SignUpFormValues } from "@/components/forms/sign-up-form";
import { AUTH_API, URLS } from "@/lib/const";
import axios from "axios";
import { AuthError } from "next-auth";

const userType = "BUSINESS_USER";


export const signup = async (values: SignUpFormValues) => {
    const url = `${AUTH_API}${URLS.auth.sign_up}?userType=${encodeURIComponent(
      userType
    )}`;
    try {
      const res = await axios.post(url, {
        firstName: values.firstname,
        lastName: values.lastname,
        phone: values.phonenumber,
        email: values.email, //personal email
        password: values.password.password,
        confirmpassword: values.password.confirmPassword,
      });
      //TODO: business email field missing from endpoint - DONE!!
      return res.data;
    } catch (e: any) {
      if (e instanceof AuthError) {
        console.log(e.message);
        return null;
      }
    }
  };