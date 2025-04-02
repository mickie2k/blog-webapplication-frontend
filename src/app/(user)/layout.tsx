
import Navbar from "@/components/navbar/navbar";


export default function UserLayout({ children }:  Readonly<{
    children: React.ReactNode;
  }>) {
    return (
                <>   
                    <Navbar/>
                    {children}
                    <div className="pb-16"></div>
                </>

    )

}