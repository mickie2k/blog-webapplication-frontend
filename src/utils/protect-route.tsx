"use client"

import { useRouter } from "next/navigation";
import { useAuth } from '@/context/auth-context';
import { useEffect } from "react";
import { Role } from "@/enum/role.enum";
import Loading from "@/components/loading/loading";


interface ProtectRouteProps {
    children: React.ReactNode;
    requiredRoles: Role[];
}

const ProtectedRoute: React.FC<ProtectRouteProps> = ({ children, requiredRoles }) => {
    const { isAuthenticated, loading, hasRole } = useAuth();
    const router = useRouter();
    useEffect(() => {
           // Wait for loading to finish
        // Check if user is authenticated and has the required roles
          if (!loading && !isAuthenticated) {
            router.replace('/login');
            
          }
          
          if (!loading && requiredRoles.length > 0 && !hasRole(requiredRoles)) {
            router.replace('/unauthorized');
            
          }
      }, [isAuthenticated, requiredRoles, router, hasRole,loading]);
      
      if (loading) {
        return <Loading/>
      }    

      if (!isAuthenticated || (requiredRoles.length > 0 && !hasRole(requiredRoles))) {
        return null;
      }

    return <>{children}</>;
}

export default ProtectedRoute;
