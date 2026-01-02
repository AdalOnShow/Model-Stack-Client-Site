import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { toast } from 'sonner';
import PrimaryBtn from '../components/PrimaryBtn';
import Heading from '../components/Heading';
import useAxiosSecure from '../hooks/useAxiosSecure';

const EditeModel = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();

  const [model, setModel] = useState([])
  const [submitingLoader, setSubmitingLoader] = useState(false)

  const { name, framework, dataset, useCase, image, description, createdBy } = model

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await axiosInstance.get(`/models/${id}`);
        setModel(response.data);
      } catch (err) {
        toast.error(err?.message || "Something went wrong");
      }
    };
    fetchModel();
  }, [id, axiosInstance]);

  const handleUpdateModelForm = (e) => {
    e.preventDefault()
    setSubmitingLoader(true)

    const name = e.target.name.value;
    const framework = e.target.framework.value;
    const dataset = e.target.dataset.value;
    const useCase = e.target.useCase.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    const updatedModel = { name, framework, dataset, useCase, image, description };

    axiosSecure.patch(`/models/${id}`, updatedModel)
      .then(res => {
        if (res.data.modifiedCount) {
          toast.success('Model updated successfully!');
          setSubmitingLoader(false)
          navigate(`/models/${id}`)
        }
        else {
          toast.error('Model not updated!');
          setSubmitingLoader(false)
        }
      })
      .catch(err => {
        toast.error(err?.message || "Something went wrong");
        setSubmitingLoader(false)
      });
  }

  return (
    <div className='max-w-7xl mx-auto py-16 px-6'>
      <Heading title="Update" highlight="Model" />
      <form onSubmit={(e) => handleUpdateModelForm(e)} className="max-w-xl mx-auto flex flex-col bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Creator Email</label>
            <input 
              required 
              placeholder="Created Email" 
              name='createdBy' 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed" 
              type="text" 
              readOnly 
              disabled 
              defaultValue={createdBy} 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input 
              required 
              placeholder="Model name" 
              name='name' 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              type="text" 
              defaultValue={name} 
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Framework</label>
              <input 
                placeholder="Framework" 
                name='framework' 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                type="text" 
                defaultValue={framework} 
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Dataset</label>
              <input 
                placeholder="Dataset" 
                name='dataset' 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                type="text" 
                defaultValue={dataset} 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Use Case</label>
            <input 
              placeholder="Use Case" 
              name='useCase' 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              type="text" 
              defaultValue={useCase} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image URL</label>
            <input 
              required 
              placeholder="eg. https://example.com/image.jpg" 
              name='image' 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              type="text" 
              defaultValue={image} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
            <textarea 
              required 
              placeholder="Write Description" 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[120px]" 
              name='description' 
              defaultValue={description} 
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <PrimaryBtn submit loader={submitingLoader}>
            Update Model
          </PrimaryBtn>
        </div>
      </form>
    </div>
  )
}

export default EditeModel