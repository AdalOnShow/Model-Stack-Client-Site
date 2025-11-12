import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { toast } from 'sonner'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router'
import Heading from '../components/Heading'

const MyModels = () => {
  const [myModels, setMyModels] = useState([])
  const [dataLoading, setDataLoading] = useState(true)
  const { user, loading } = useAuth()
  const axiosInstance = useAxios()
  console.log(myModels)

  useEffect(() => {
    axiosInstance.get(`/models?email=${user?.email}`)
      .then(response => {
        if (response.data) {
          setMyModels(response.data);
          setDataLoading(false);
        }
      })
      .catch(err => {
        toast.error(err?.message || "Something went wrong");
      })
  }, [axiosInstance, user]);

  if (loading || dataLoading) {
    return (
      <div className="flex-center w-full h-40">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className='max-w-11/12 mx-auto min-h-screen mb-10'>
      <Heading title="My" highlight="Models" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & Framework</th>
              <th>Use Case</th>
              <th>Created by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myModels.map((model) => {
              return (
                <tr key={model._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle size-20">
                        <img
                          src={model.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{model.name}</div>
                        <div className="text-sm opacity-50">{model.framework}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {model.useCase}
                  </td>
                  <td>{model.createdBy}</td>
                  <th>
                    <Link to={`/models/${model._id}`} className="btn btn-ghost btn-xs">View Details</Link>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyModels