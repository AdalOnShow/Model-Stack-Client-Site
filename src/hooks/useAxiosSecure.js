import { useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
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
