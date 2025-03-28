"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Button } from "../ui/button";
import { toast } from "sonner"
import { Separator } from "../ui/separator";

export default function LoginhtmlForm() {
	const router = useRouter();
	const auth = useAuth();
	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const formDataJson: { [key: string]: FormDataEntryValue } = {};
		formData.forEach((value, key) => {
			formDataJson[key] = value;
		});
		
		try {
			await auth.login(formDataJson);  // Make sure login is awaited
		  } catch (error) {
			toast.error("Incorrect Email or Password.");
		  }
	};

	const onGoogleSubmit = async()=>{
		window.open("http://localhost:3000/auth/google", "_self");
	}
	return (
		<section className="self-center align-middle w-full h-fit">
			<div className="flex w-full flex-col items-center gap-4  px-6 py-0 mx-auto md:h-full lg:py-0 ">
				<h1 className="flex items-center  text-2xl font-bold  ">
					Login to your account
				</h1>
				<div className="w-full bg-transparent md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="px-6 space-y-4 md:space-y-6 ">
						
						<form className="mt-4 space-y-4 md:space-y-6" onSubmit={onSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium  "
								>
									Your Email
								</label>

								<input
									type="email"
									name="email"
									id="email"
									className=" border-border border bg-input/30 rounded-lg  block w-full p-2.5 "
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
									className="border-border border bg-input/30   rounded-lg  block w-full p-2.5"
									required
								/>
							</div>

								<Button className="w-full " type="submit" variant="default" size="lg" >
									Sign in
								</Button>
							
							<p className="text-sm  text-zinc-400">
								Don’t have an account yet?{" "}
								<Link
									href="/register"
									className="font-medium text-zinc-300 hover:underline "
								>
									Sign up
								</Link>
							</p>
						</form>
						<div className="flex items-center justify-between gap-4">
							<hr className="border-border w-full" />
							<span>or</span>
							<hr className="border-border w-full" />
						</div>
						<div>
							
								<button onClick={onGoogleSubmit} className="w-full border border-border bg-none hover:bg-input/30  flex items-center justify-center gap-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer transition"> <FcGoogle size={24}/> Login with Google</button>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
