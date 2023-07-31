import React from 'react';

const NutritionSection = ({ filteredNutriments, nutritionDataGram }) => {
  return (
    <section className="w-[80%] my-1 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 font-bold">Nutrient</th>
              <th className="py-2 px-4 font-bold">Value (per {nutritionDataGram})</th>
            </tr>
          </thead>
          <tbody>
            {filteredNutriments?.map(([key, value], index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 font-semibold">{key.replace('_100g', '')}</td>
                <td className="py-2 px-4">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NutritionSection;