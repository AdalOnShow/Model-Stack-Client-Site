import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  return (
    <Link to={`/models/${model._id}`}>
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden cursor-pointer">
        <div className="w-full h-56 overflow-hidden">
          <img
            src={model.image}
            alt={model.name}
            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">{model.name}</h3>
          <p className="text-gray-500 dark:text-gray-200 font-medium mb-3">Framework: {model.framework}</p>
          <p className="text-gray-500 dark:text-gray-200 flex-1">
            {model.description.length > 40
              ? model.description.slice(0, 40) + "...see more"
              : model.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ModelCard;
