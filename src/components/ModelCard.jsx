import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="w-full h-auto overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">{model.name}</h3>
        <p className="text-gray-500 font-medium mb-3">Framework: {model.framework}</p>
        <p className="text-gray-600 flex-1">
          {model.description.length > 120
            ? model.description.slice(0, 120) + "..."
            : model.description}
        </p>
      </div>
    </div>
  );
};

export default ModelCard;
