
import Logo from "@/components/logo/logo";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
                <>   
                    <div className="fixed flex items-center  h-16 px-6">
                        <Link href="/"><Logo/></Link>
                    </div>
                    {children}
                </>

    )

}