import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { toast } from "sonner";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import ModelNotFound from "./../components/ModelNotFound";
import PrimaryBtn from "../components/PrimaryBtn";
import DangerBtn from "../components/DangerBtn";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ModelDetails = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [model, setModel] = useState(null);
  const [purchasesLoading, setPurchasesLoading] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/models/${id}`)
      .then((res) => {
        setModel(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.message || "Something went wrong");
        setLoading(false);
      });
  }, [id, axiosInstance]);

  const {
    _id,
    name,
    image,
    framework,
    description,
    useCase,
    purchased,
    createdBy,
    dataset,
  } = model || {};

  const handlePurchase = async () => {
    setPurchasesLoading(true);
    try {
      await axiosSecure
        .post(`/purchases`, {
          modelId: _id,
          modelName: name,
          framework,
          useCase,
          createdBy,
          purchasedBy: user?.displayName,
          purchasedEmail: user?.email,
          modelImage: image,
        })
        .then((res) => {
          if (res.data.insertedId) {
            axiosSecure
              .patch(`/models/${_id}`, { purchased: purchased + 1 })
              .then(() => {
                toast.success("Model purchased successfully!");
                setModel((prevModel) => ({
                  ...prevModel,
                  purchased: prevModel.purchased + 1,
                }));
                setPurchasesLoading(false);
              })
              .catch((err) => {
                toast.error(err?.message || "Something went wrong");
              });
          }
        })
        .catch((err) => {
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
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/models/${id}`);
          Swal.fire("Deleted!", "", "success");
          navigate("/models");
        } catch (err) {
          toast.error(err?.message || "Something went wrong");
        }
      }
    });
  };
  const isCreator = createdBy === user?.email;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8 grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="skeleton h-96 w-full rounded-xl" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton h-4 w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (!model) return <ModelNotFound />;

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8 grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={name}
            className="rounded-xl w-full h-auto object-cover shadow-sm max-h-96"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold mb-4">{name}</h2>
          <p className="text-gray-700 dark:text-white mb-2">
            <span className="font-semibold">Framework:</span> {framework}
          </p>
          <p className="text-gray-700 dark:text-white mb-2">
            <span className="font-semibold">Use Case:</span> {useCase}
          </p>
          <p className="text-gray-700 dark:text-white mb-2">
            <span className="font-semibold">Dataset:</span> {dataset}
          </p>
          <p className="text-gray-700 dark:text-white mb-2">
            <span className="font-semibold">Created By:</span> {createdBy}
          </p>
          <p className="text-gray-700 dark:text-white mb-4">{description}</p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Purchased <span className="font-semibold">{purchased}</span> times
          </p>

          <div className="flex gap-3">
            <PrimaryBtn loader={purchasesLoading} onClick={handlePurchase}>
              Purchase Model
            </PrimaryBtn>

            {isCreator && (
              <>
                <Link to={`/models/${id}/edit`}>
                  <button className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-xl hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors duration-200">
                    Edit
                  </button>
                </Link>
                <DangerBtn onClick={handleDelete}>Delete</DangerBtn>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
