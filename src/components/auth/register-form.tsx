"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/utils/http";
import PasswordChecklist from "react-password-checklist"
import { useAuth } from "@/context/auth-context";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function RegisterForm() {
	const [password, setPassword] = useState("")
	const router = useRouter();
	const auth = useAuth();


	useEffect(() => {
		if (auth.isAuthenticated) {
			router.push("/");
		}
	}, [auth.isAuthenticated, router]);
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const formDataJson: { [key: string]: FormDataEntryValue } = {};
		formData.forEach((value, key) => {
			formDataJson[key] = value;
		});


		await axiosInstance.post(
			"/auth/register",
			formDataJson
		).then((response) => {
			if (response.status == 201) {
				toast("Success",{
					description: 'Account has been created',
					action:{
						label: 'Login',
						onClick: () => router.push('/login')
					},
					position: 'top-center',
				})
			} else {
				toast.warning(response.data.message,{
					position: 'top-center',
				})
			}
		}
		).catch((error) => {
			// Handle error here
			toast.error(error.response.data.message,{
				position: 'top-center',
			})
		})




	};
	return (
		<section className="self-center align-middle w-full h-fit">
			<div className="flex w-full flex-col items-center gap-4  px-6 py-0 mx-auto md:h-full lg:py-0 ">
				<h1 className="flex items-center mb-6 text-2xl font-bold  ">
					Create your account
				</h1>
				<div className="w-full bg-transparent  md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="px-6 space-y-4 md:space-y-6">
						<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
							<div>
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium  "
								>
									Your Fullname
								</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									className=" border-border border bg-input/30   rounded-t-lg  block w-full p-2.5 "
									placeholder="First name"
									required
								/>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="border-border border bg-input/30    rounded-b-lg  block w-full p-2.5 "
									placeholder="Last name"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium  "
								>
									Your Username
								</label>
								<input
									type="username"
									name="username"
									id="username"
									className="border-border border bg-input/30   rounded-lg  block w-full p-2.5 "
									placeholder="username"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium  "
								>
									Your Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="border-border border bg-input/30    rounded-lg  block w-full p-2.5 "
									placeholder="email"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium  "
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="border-border border bg-input/30  mb-2  rounded-lg  block w-full p-2.5"
									required
									onChange={e => setPassword(e.target.value)}
								/>

								{password && (<PasswordChecklist
									rules={["minLength", "specialChar", "number", "capital"]}
									minLength={8}
									value={password}
									iconSize={12}
									
									
								/>)}

							</div>

							<Button className="w-full " type="submit" variant="default" size="lg" >
									Sign up
								</Button>
							
							<p className="text-sm  text-zinc-400 ">
								Already have an account?{" "}
								<Link
									href="/login"
									className="font-medium text-zinc-300 hover:underline "
								>
									Sign in
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
