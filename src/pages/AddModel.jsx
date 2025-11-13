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
    <div className='max-w-11/12 mx-auto pb-10'>
      <Heading title="Add A New" highlight="Model" />
      <form onSubmit={(e) => handleAddModelForm(e)} className="max-w-xl mx-auto flex flex-col bg-gray-900 rounded-lg p-8 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-white">Name</label>
            <input required placeholder="Model name" name='name' className="add-form-input" type="text" />
          </div>

          <div className="flex-center space-x-2">
            <div className="flex-1">
              <label className="text-white">Framework</label>
              <input placeholder="Framework" name='framework' className="add-form-input" type="text" />
            </div>

            <div className="flex-1">
              <label className="text-white">Dataset</label>
              <input placeholder="Dataset" name='dataset' className="add-form-input" type="text" />
            </div>
          </div>

          <div>
            <label className="text-white">Use Case</label>
            <input placeholder="Use Case" name='useCase' className="add-form-input" type="text" />
          </div>

          <div>
            <div className="flex-1">
              <label className="text-white">Image(URL)</label>
              <input required placeholder="eg. https://example.com/image.jpg" name='image' className="add-form-input" type="text" />
            </div>
          </div>

          <div>
            <label className="text-white">Description</label>
            <textarea required placeholder="Write Description" className="add-form-input" name='description' />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <PrimaryBtn submit>
            {submitingLoader ? (<>
              <span className="loading loading-spinner" />Creating...</>) : "Create"}
          </PrimaryBtn>
        </div>
      </form>
    </div>
  )
}

export default AddModel