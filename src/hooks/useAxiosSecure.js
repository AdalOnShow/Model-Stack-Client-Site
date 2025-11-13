import { useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'https://model-stack-server.vercel.app',
});


const useAxiosSecure = () => {
  const { user } = useAuth()

  useEffect(() => {
    const requesInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`
      return config
    })

    return () => {
      axiosSecure.interceptors.request.eject(requesInterceptor)
    }
  }, [user])

  return axiosSecure;
};

export default useAxiosSecure;
