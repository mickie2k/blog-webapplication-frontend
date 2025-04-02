import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "sonner";

export const handleErrorAdmin = (error: unknown,router: AppRouterInstance) => {
    if (axios.isAxiosError(error)) {
      toast.error('Failed to fetch data', {
        description: 'Something went wrong, try again',
      });
  
      // Handle specific status codes
      if (error.response?.status === 404) {
        toast.error('Data not found', {
          description: 'No user available',
        });
      }
      if (error.response?.status === 403) {
        toast.error('Forbidden', {
          description: 'You do not have permission to access this data',
        });
        router.replace('/unauthorized');
      }
    } else {
      console.error("Unexpected error:", error);
    }
  };
  
