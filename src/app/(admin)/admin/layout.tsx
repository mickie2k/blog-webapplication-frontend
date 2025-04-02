import { AdminSideBar } from "@/components/admin/admin-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Role } from "@/enum/role.enum";
import ProtectedRoute from "@/utils/protect-route";

export default function AdminLayout({ children }:  Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <ProtectedRoute requiredRoles={[Role.ADMIN]}>
            <SidebarProvider
                style={
                    {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
                >
                <AdminSideBar variant="inset"/>
                <SidebarInset>
                    {children}
                </SidebarInset>

            </SidebarProvider>
        </ProtectedRoute>
    )

}

