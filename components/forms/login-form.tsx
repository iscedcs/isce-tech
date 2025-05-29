"use client";
import { login } from "@/actions/login";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { toast } from "sonner";
import { z } from "zod";
import { loginFormSchema } from "../../lib/schemas";
import CardWrapper from "../auth/card-wrapper";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export default function LoginForm() {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();


  const callbackUrl = searchParams.get("callbackUrl") ?? undefined;
  console.log("callback url from search params", { callbackUrl });
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
         email: "",
         password: "",
    },
});

 

  const onClickUnhidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);

    const res = await login(data, callbackUrl);
    setIsLoading(false);

    if (res !== null) {
      toast.success("Account Logged In", {
        description: "This account has successfully been logged in",
      });
      router.push(DEFAULT_LOGIN_REDIRECT);
    } else {
      toast.error("Login failed", {
        description: "Invalid email or password",
      });
      console.error("SignIn error:");
    }
  };

  return (
    <CardWrapper
    headerLabel="Login To Continue"
    backButtonLabel="Don't have an account? Sign Up"
    backButtonHref="/sign-up"
    >      
    <Form {...form}>
        <form
          className="flex gap-48 flex-col"
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className=" flex gap-3 flex-col justify-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      required
                      className=" bg-textbox rounded-[10px]   "
                      {...field}
                      placeholder="Email Address"
                    />
                  </FormControl>
                  <FormMessage className=" text-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className=" relative">
                      <Input
                        required
                        type={hidePassword ? "password" : "text"}
                        max={10}
                        className="bg-textbox rounded-[10px]   "
                        {...field}
                        placeholder="Password"
                      />
                      <div onClick={onClickUnhidePassword} className=" ">
                        {hidePassword ? (
                          <IoIosEyeOff className=" absolute right-0 top-2 mr-6 cursor-pointer w-7 h-7 " />
                        ) : (
                          <IoEye className=" absolute right-0 top-2 mr-6 cursor-pointer w-7 h-7 " />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className=" text-error" />
                </FormItem>
              )}
            />
           
          </div>
          <div className="">
            <Button
              type="submit"
              disabled={isLoading}
              className={` cursor-pointer bg-primary hover:bg-primary-hover rounded-[10px] w-full text-white `}
            >
              {isLoading ? (
                <ImSpinner9 className="animate-spin w-6 h-6 mr-3 " />
              ) : null}
              {isLoading ? "Signing In" : "Sign In"}
            </Button>
          </div>
        </form>
      </Form>
      </CardWrapper>
  );
}
