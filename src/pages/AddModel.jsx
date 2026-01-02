import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import PrimaryBtn from '../components/PrimaryBtn';
import Heading from '../components/Heading';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AddModel = () => {
  const [submitingLoader, setSubmitingLoader] = useState(false)
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddModelForm = (e) => {
    e.preventDefault();
    setSubmitingLoader(true)

    const name = e.target.name.value;
    const framework = e.target.framework.value;
    const dataset = e.target.dataset.value;
    const useCase = e.target.useCase.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    const newModel = { name, framework, dataset, useCase, image, description, createdBy: user?.email, createdAt: new Date().toISOString(), purchased: 0 };

    axiosSecure.post('/models', newModel)
      .then(res => {
        if (res.data.insertedId) {
          toast.success('Model added successfully!');
          setSubmitingLoader(false)
          e.target.reset();
          navigate('/models')
        }
      })
      .catch(err => {
        toast.error(err?.message || "Something went wrong");
      });

  }

  return (
    <div className='max-w-7xl mx-auto py-16 px-6'>
      <Heading title="Add A New" highlight="Model" />
      <form onSubmit={(e) => handleAddModelForm(e)} className="max-w-xl mx-auto flex flex-col bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input 
              required 
              placeholder="Model name" 
              name='name' 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              type="text" 
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
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Dataset</label>
              <input 
                placeholder="Dataset" 
                name='dataset' 
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                type="text" 
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
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
            <textarea 
              required 
              placeholder="Write Description" 
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[120px]" 
              name='description' 
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <PrimaryBtn submit loader={submitingLoader}>
            Create Model
          </PrimaryBtn>
        </div>
      </form>
    </div>
  )
}

export default AddModel