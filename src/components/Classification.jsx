import React from 'react';

const ClassificationSection = ({ labelsArray }) => {
  return (
    <section className="w-[80%] my-1 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {labelsArray?.map((label, index) => (
          <div key={index} className="bg-white rounded-lg font-semibold shadow-lg p-4 text-center text-sm">
            {label.trim()}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassificationSection;