import axios from "axios";

const API_HOST = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const axiosInstance = axios.create({
    baseURL: API_HOST,
    timeout: 1000,
    withCredentials: true,
});


axiosInstance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

axiosInstance.interceptors.response.use((response)=>{
      // Do something before request is sent

      return response;
    }, async (error)=>{
      // Do something with request error
      const originalRequest = error.config;
      if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const response = await axios.post(`${API_HOST}/auth/refresh`, {}, { withCredentials: true });
                // const { accessToken } = response.data;
                return axiosInstance(originalRequest);
            
        } catch (refreshError) {
            console.error("Token refresh failed:", refreshError);
            window.location.href = "/login";
            return Promise.reject(refreshError);
        }
        }
      return Promise.reject(error);
})

export default axiosInstance ;