import React from 'react';

const DescriptionSection = ({ brandName, weight, country, category }) => {
  return (
    <section className="w-[80%] my-4 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="w-full break-all break-words">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Brand</td>
              <td className="py-2 px-4">{brandName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Manufacturer</td>
              <td className="py-2 px-4">{brandName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Weight</td>
              <td className="py-2 px-4">{weight}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold">Country</td>
              <td className="py-2 px-4">{country}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold">Category</td>
              <td className="py-2 px-4">{category}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DescriptionSection;