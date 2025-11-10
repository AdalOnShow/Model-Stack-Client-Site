import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import ModelNotFound from './../components/ModelNotFound';

const ModelDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [purchasesLoading, setPurchasesLoading] = useState(false)

  useEffect(() => {
    axiosInstance.get(`/models/${id}`)
      .then(res => {
        setModel(res.data);
        setLoading(false);
      })
      .catch(err => {
        toast.error(err?.message || "Something went wrong");
        setLoading(false);
      });
  }, [id, axiosInstance]);

  const { _id, name, image, framework, description, useCase, purchased, createdBy, dataset } = model || {};

  const handlePurchase = async () => {
    setPurchasesLoading(true);
    try {
      await axiosInstance.post(`/purchases`, {
        modelId: _id,
        modelName: name,
        framework,
        useCase,
        createdBy,
        purchasedBy: user?.displayName,
        purchasedEmail: user?.email,
        modelImage: image
      })
        .then((res) => {
          if (res.data.insertedId) {
            axiosInstance.patch(`/models/${_id}`, { purchased: purchased + 1 })
              .then(() => {
                toast.success("Model purchased successfully!");
                setModel(prevModel => ({
                  ...prevModel,
                  purchased: prevModel.purchased + 1
                }));
                setPurchasesLoading(false);
              })
              .catch(err => {
                toast.error(err?.message || "Something went wrong");
              });
          }
        })
        .catch(err => {
          toast.error(err?.message || "Something went wrong");
        });

    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      denyButtonText: `Don't delete`,
    }).then(async(result)  => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/models/${id}`);
          Swal.fire("Deleted!", "", "success");
          navigate("/models");
        } catch (err) {
          toast.error(err?.message || "Something went wrong");
        }
      }
    });
  };
  const isCreator = createdBy === user?.email;

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!model) return <ModelNotFound />;


  return (
    <div className="max-w-11/12 mx-auto my-10 bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-10">
      <div className="flex max-w-10/12 mx-auto w-full justify-center items-center">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-auto object-cover shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center space-y-2">
        <h2 className="text-3xl font-bold mb-3">{name}</h2>
        <p className="text-gray-700"><span className="font-semibold">Framework:</span> {framework}</p>
        <p className="text-gray-700"><span className="font-semibold">Use Case:</span> {useCase}</p>
        <p className="text-gray-700"><span className="font-semibold">Dataset:</span> {dataset}</p>
        <p className="text-gray-700"><span className="font-semibold">Created By:</span> {createdBy}</p>
        <p className="text-gray-700 my-2">{description}</p>

        <p className="text-sm text-gray-600 mb-5">
          Purchased <span className="font-semibold">{purchased}</span> times
        </p>

        <div className="flex gap-3">
          <button
            onClick={handlePurchase}
            className="btn btn-primary cursor-pointer text-white"
          >
            {purchasesLoading ? (<>
              <span className="loading loading-spinner" />Purchasing Model...</>) : "Purchase Model"}
          </button>

          {isCreator && (
            <>
              <Link
                to={`/models/${id}/edit`}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
