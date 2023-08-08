import React from "react";

const DescriptionSection = ({
  brandName,
  weight,
  country,
  category,
  servingSize,
}) => {
  return (
    <section className="w-[95%] my-1 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-1">
        <table className="w-full gap-2">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-2 w-[25%] font-semibold">Brand</td>
              <td className="py-2 px-2 w-[75%]">{brandName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2 w-[25%] font-semibold">Manufacturer</td>
              <td className="py-2 px-2 w-[75%]">{brandName}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2 w-[25%] font-semibold">Serving size</td>
              <td className="py-2 px-2 w-[75%]">{servingSize}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2 w-[25%] font-semibold">Weight</td>
              <td className="py-2 px-2 w-[75%]">{weight}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-2 w-[25%] font-semibold">Country</td>
              <td className="py-2 px-2 w-[75%]">{country}</td>
            </tr>
            <tr>
              <td className="py-2 px-2 w-[25%] font-semibold">Category</td>
              <td className="py-2 px-2 w-[75%]">{category}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DescriptionSection;
