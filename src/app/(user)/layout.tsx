
import Navbar from "@/components/navbar/navbar";


export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
                <>   
                    <Navbar/>
                    {children}
                </>

    )

}