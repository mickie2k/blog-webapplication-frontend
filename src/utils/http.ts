
import axios from "axios";


const API_HOST = process.env.NEXT_PUBLIC_API_URL ;


const axiosJWTInstance = axios.create({
    baseURL: API_HOST,
    timeout: 1000,
    withCredentials: true,
});


axiosJWTInstance.interceptors.request.use(
    (request) => {

      return request;
    },
    (error) => {
      return Promise.reject(new Error("Request failed : ", error));
    }
  );
  

axiosJWTInstance.interceptors.response.use((response)=>{
      // Do something before request is sent

      return response;
    }, async (error)=>{
      // Do something with request error
      const originalRequest = error.config;
      if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
             await axios.post(`${API_HOST}/auth/refresh`, {}, { withCredentials: true });

                

                return axiosJWTInstance(originalRequest);
            
        } catch (refreshError) {
            console.error("Token refresh failed:", refreshError);
            const skipRedirect = originalRequest.skipAuthRedirect === true;
            if (!skipRedirect) {
              // Use router push in Next.js apps or direct navigation for others
                window.location.href = "/login";
              
            }
            return Promise.reject(new Error("Token refresh failed"));
        }
        }
      return Promise.reject(new Error("Response Failed"));
})


const axiosInstance = axios.create({
    baseURL: API_HOST,
    timeout: 1000,
    withCredentials: true,
});

export {axiosJWTInstance , axiosInstance};


