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
    <div className='max-w-11/12 mx-auto pb-10'>
      <Heading title="Update" highlight="Model" />
      <form onSubmit={(e) => handleUpdateModelForm(e)} className="max-w-xl mx-auto flex flex-col bg-gray-900 rounded-lg p-8 shadow-sm">

        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-white">Creator Email</label>
            <input required placeholder="Created Email" name='createdBy' className="add-form-input disabled:opacity-60" type="text" readOnly disabled defaultValue={createdBy} />
          </div>
          <div>
            <label className="text-white">Name</label>
            <input required placeholder="Model name" name='name' className="add-form-input" type="text" defaultValue={name} />
          </div>

          <div className="flex-center space-x-2">
            <div className="flex-1">
              <label className="text-white">Framework</label>
              <input placeholder="Framework" name='framework' className="add-form-input" type="text" defaultValue={framework} />
            </div>

            <div className="flex-1">
              <label className="text-white">Dataset</label>
              <input placeholder="Dataset" name='dataset' className="add-form-input" type="text" defaultValue={dataset} />
            </div>
          </div>

          <div>
            <label className="text-white">Use Case</label>
            <input placeholder="Use Case" name='useCase' className="add-form-input" type="text" defaultValue={useCase} />
          </div>

          <div>
            <div className="flex-1">
              <label className="text-white">Image(URL)</label>
              <input required placeholder="eg. https://example.com/image.jpg" name='image' className="add-form-input" type="text" defaultValue={image} />
            </div>
          </div>

          <div>
            <label className="text-white">Description</label>
            <textarea required placeholder="Write Description" className="add-form-input" name='description' defaultValue={description} />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <PrimaryBtn submit loader={submitingLoader}>
            Update
          </PrimaryBtn>
        </div>
      </form>
    </div>
  )
}

export default EditeModel