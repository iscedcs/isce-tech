"use client";
import { signup } from "@/actions/sign-up";
import { signUpFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { toast } from "sonner";
import { z } from "zod";
import CardWrapper from "../auth/card-wrapper";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export default function SignUpForm() {
	const [isNext, setIsNext] = useState<number>(0);
	const [hidePassword, setHidePassword] = useState<boolean>(true);
	const [hideCPassword, setHideCPassword] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	const defaultValues: Partial<SignUpFormValues> = {
		firstname: "",
		lastname: "",
		email: "",
		dob: "",
		address: "",
		phonenumber: "",
		termsCheck: false,
		password: { password: "", confirmPassword: "" },
	};
	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues,
		mode: "all",
	});

	const inputValues = [
		form.watch("firstname"),
		form.watch("lastname"),
		form.watch("phonenumber"),
		form.watch("email"),
		form.watch("dob"),
		form.watch("address"),
		form.watch("password.password"),
		form.watch("password.confirmPassword"),

	];

	const termsCheck = form.watch("termsCheck");

	var allEmpty;

	switch (isNext) {
		case 0:
			const firstSection = inputValues.slice(1, 3);
			allEmpty =
				firstSection.every((value) => value === "") ||
				firstSection.some((value) => value === "");
			break;
	}

	const onClickNext = () => {
		setIsNext(isNext + 1);
	};

	const onClickBack = () => {
		setIsNext(isNext - 1);
	};

	const onClickUnhidePassword = () => {
		setHidePassword(!hidePassword);
	};

	const onClickUnhideCPassword = () => {
		setHideCPassword(!hideCPassword);
	};

	const onSubmit = async (data: SignUpFormValues) => {
		setIsLoading(true);
		const res = await signup({
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email,
			phonenumber: data.phonenumber,
			address: data.address,
			dob: data.dob,
			password: data.password,
		});

		setIsLoading(false);
		if (res?.success === true) {
			toast.success("Account Created", {
				description: "This account has been created successfully",
			});
			router.push("/login");
		} else {
			toast.error("Account Creation Failed", {
				description: res?.error || "Please try again, one or more fields are missing",
			});
			console.error("SignUp error:" , res?.error);
		}
	};


	return (
<CardWrapper
	headerLabel="Create an account"
	backButtonLabel="Already have an account? Login"
	backButtonHref="/login"
	> 
	<Form {...form}>
	<form
		onSubmit={form.handleSubmit(onSubmit)}
		className=" mt-[30px] grid grid-row-2 gap-16 "
	>
		<div className=" flex ">
			<div
				className={` w-full grid transition-all duration-300 ease-in-out grid-row-3 gap-3 ${
					isNext === 0 ? " translate-x-0 " : "-translate-x-full hidden "
				} `}
			>
				<p className="">Personal Information</p>
				<FormField
					control={form.control}
					name="firstname"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type="text"
									required
									className=" bg-textbox rounded-[10px]   "
									{...field}
									placeholder="First Name"
								/>
							</FormControl>
							<FormMessage className=" text-error" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type="text"
									required
									className=" bg-textbox rounded-[10px]   "
									{...field}
									placeholder="Last Name"
								/>
							</FormControl>
							<FormMessage className=" text-error" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phonenumber"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type="text"
									required
									className=" bg-textbox rounded-[10px]   "
									{...field}
									placeholder="Phone Number"
								/>
							</FormControl>
							<FormMessage className=" text-error" />
						</FormItem>
					)}
				/>

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
			</div>

			<div
				className={` w-full grid transition-all duration-300 ease-in-out grid-row-3 gap-3 ${
					isNext === 1 ? " translate-x-0 " : "-translate-x-full hidden "
				} `}
			>
				<FormField
					control={form.control}
					name="dob"
					render={({ field }) => (
						<FormItem className=" items-center flex">
							<p className=" w-[30%]">Date of Birth:</p>
							<FormControl>
								<Input
									type="date"
									required
									className=" bg-textbox rounded-[10px]   "
									{...field}
									placeholder="e0fk0f0fe0"
								/>
							</FormControl>
							<FormMessage className=" text-error" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									type="text"
									required
									className=" bg-textbox rounded-[10px]   "
									{...field}
									placeholder="Address"
								/>
							</FormControl>
							<FormMessage className=" text-error" />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password.password"
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
				<FormField
					control={form.control}
					name="password.confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className=" relative">
									<Input
										required
										type={hideCPassword ? "password" : "text"}
										max={10}
										className="bg-textbox rounded-[10px]   "
										{...field}
										placeholder="Confirm Password"
									/>
									<div onClick={onClickUnhideCPassword} className=" ">
										{hideCPassword ? (
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
				<div className="flex items-center space-x-2">
					<FormField
						name="termsCheck"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
										className=" rounded-[4px] bg-textbox border "
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<label
						htmlFor="terms"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						By registering, you agree to our{" "}
						<Link className=" font-bold  text-primary" href={"/"}>
							Terms of Use
						</Link>{" "}
						and
						<Link className=" text-primary font-bold" href={"/"}>
							{" "}
							Privacy Policy
						</Link>
					</label>
				</div>
			</div>
		</div>

		<div className=" justify-center gap-5">
			{isNext === 1 ? (
				<div className="">
					<Button
						type="submit"
						disabled={isLoading || !termsCheck}
						className={` cursor-pointer bg-primary hover:bg-primary-hover rounded-[10px] w-full text-white `}
					>
						{isLoading ? (
							<ImSpinner9 className="animate-spin w-6 h-6 mr-3 " />
						) : null}
						{isLoading ? "Signing up" : "Create an account"}
					</Button>
				</div>
			) : (
				<div className=" flex gap-3">
					<Button
						type="button"
						onClick={onClickBack}
						disabled={isNext === 0}
						// disabled={!form.formState.isValid}
						className={` bg-primary hover:bg-primary-hover rounded-[10px] w-[50%] text-white `}
					>
						Back
					</Button>
					<Button
						type="button"
						onClick={onClickNext}
						disabled={allEmpty}
						// disabled={!form.formState.isValid}
						className={` bg-primary hover:bg-primary-hover rounded-[10px] w-[50%] text-white `}
					>
						Next
					</Button>
				</div>
			)}
		</div>
	</form>
	</Form>
	</CardWrapper>
	);
}
