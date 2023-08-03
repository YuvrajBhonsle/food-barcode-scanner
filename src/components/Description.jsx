import React from 'react';

const DescriptionSection = ({ brandName, weight, country, category, servingSize }) => {
  return (
    <section className="w-[95%] my-1 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-1">
        <table className="w-full break-all break-words gap-2">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Brand</td>
              <td className="py-2 px-4 w-[75%]">{brandName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[60%]">Manufacturer</td>
              <td className="py-2 px-4 w-[40%]">{brandName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Serving size</td>
              <td className="py-2 px-4 w-[75%]">{servingSize}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Weight</td>
              <td className="py-2 px-4 w-[75%]">{weight}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Country</td>
              <td className="py-2 px-4 w-[75%]">{country}</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-semibold w-[50%]">Category</td>
              <td className="py-2 px-4 w-[75%]">{category}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DescriptionSection;