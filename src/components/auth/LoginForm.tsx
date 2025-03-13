"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import {axiosInstance} from "@/utils/http";
import { useRouter } from "next/navigation";

export default function LoginhtmlForm() {
	const router = useRouter();
	// const auth = useAuth();
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const formDataJson: { [key: string]: FormDataEntryValue } = {};
		formData.forEach((value, key) => {
			formDataJson[key] = value;
		});
		
		try {
			const response = await axiosInstance.post("/auth/login", formDataJson).then((response) => {
				if(response.status == 201){
					router.push("/user");
				}else{
					alert(response.data.message)
				}
			}
			).catch((error) => {
				// Handle error here
				alert(error.response.data.message)
			});
			
			
		} catch (error) {
            console.error('Logout failed:', error);
		}

		// try {
		// 	await auth.login(formDataJson);  // Make sure login is awaited
		//   } catch (error) {
		// 	console.error("Login failed:", error);
		//   }
	};

	const onGoogleSubmit = async()=>{
		window.open("http://localhost:3000/auth/google", "_self");
	}
	return (
		<section className="bg-white mt-7">
			<div className="flex flex-col items-center  px-6 py-0 mx-auto md:h-full lg:py-0 ">
				<h1 className="flex items-center mb-6 text-2xl font-bold text-gray-900 ">
					Login to your account
				</h1>
				<div className="w-full bg-transparent border-[#E2E2E2]  border-t  md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl">
							Welcome to Blog
						</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Your Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 "
									placeholder="email"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5"
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-black hover:bg-neutral-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
							>
								Sign in
							</button>
							<p className="text-sm font-light text-gray-500 ">
								Don’t have an account yet?{" "}
								<Link
									href="/register"
									className="font-medium text-gray-600 hover:underline "
								>
									Sign up
								</Link>
							</p>
						</form>
						<div className="flex items-center justify-between gap-4">
							<hr className="border-neutral-300 w-full" />
							<span>or</span>
							<hr className="border-neutral-300 w-full" />
						</div>
						<div>
							
								<button onClick={onGoogleSubmit} className="w-full text-black border border-neutral-300 bg-neutral-100 hover:bg-neutral-200  flex items-center justify-center gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"> <FcGoogle size={24}/> Login with Google</button>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
