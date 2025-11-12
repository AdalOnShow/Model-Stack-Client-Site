import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import { toast } from 'sonner'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router'
import Heading from '../components/Heading'
import PrimaryBtn from '../components/PrimaryBtn'

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
    <div className="max-w-11/12 mx-auto min-h-screen mb-10">
      <Heading title="My" highlight="Models" />

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & Framework</th>
              <th>Use Case</th>
              <th>Created By</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myModels.map((model) => (
              <tr key={model._id}>
                <td>
                  <div className="avatar w-20 h-20">
                    <div className="mask mask-squircle w-full h-full">
                      <img src={model.image} alt={model.name} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col">
                    <span className="font-bold">{model.name}</span>
                    <span className="text-sm opacity-50">{model.framework}</span>
                  </div>
                </td>
                <td>{model.useCase}</td>
                <td>{model.createdBy}</td>
                <td>
                  <Link
                    to={`/models/${model._id}`}
                  >
                    <PrimaryBtn >View Details</PrimaryBtn>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet Cards */}
      <div className="lg:hidden flex flex-col gap-4">
        {myModels.map((model) => (
          <div
            key={model._id}
            className="bg-linear-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="avatar w-24 h-24 shrink-0">
                <div className="mask mask-squircle w-full h-full overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold text-gray-800">{model.name}</h3>
                <span className="text-sm text-gray-500">{model.framework}</span>
              </div>
            </div>

            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Use Case:</span> {model.useCase}
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Created By:</span> {model.createdBy}
              </p>
            </div>

            <div className="flex justify-end">
              <Link to={`/models/${model._id}`}>
                <PrimaryBtn className="px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  View Details
                </PrimaryBtn>
              </Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default MyModels