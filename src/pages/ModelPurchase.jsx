import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { toast } from 'sonner'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router'

const ModelPurchase = () => {
  const [modelsData, setmodelsData] = useState([])
  const [dataLoading, setDataLoading] = useState(true)
  const { user, loading } = useAuth()
  const axiosInstance = useAxios()

  useEffect(() => {
    axiosInstance.get(`/purchases?email=${user?.email}`)
      .then(response => {
        if (response.data) {
          setmodelsData(response.data);
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
    <div className='max-w-11/12 mx-auto min-h-screen my-8'>
      <h2 className='text-center font-medium text-2xl'>My Purchased Models</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & Framework</th>
              <th>Use Case</th>
              <th>Created by</th>
              <th>Purchased by</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {modelsData.map((model) => {
              return (
                <tr key={model._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle size-20">
                        <img
                          src={model.modelImage}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{model.modelName}</div>
                        <div className="text-sm opacity-50">{model.framework}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {model.useCase}
                  </td>
                  <td>{model.createdBy}</td>
                  <td>{model.purchasedEmail}</td>
                  <th>
                    <Link to={`/models/${model.modelId}`} className="btn btn-ghost btn-xs">View Details</Link>
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

export default ModelPurchase