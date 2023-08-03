import React from "react";

const ClassificationSection = ({
  labelsArray,
  vegan,
  vegetarian,
  maybeIngredients,
  allergens,
}) => {
  return (
    <section className="w-[95%] my-1 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-1">
        {/* {labelsArray?.map((label, index) => (
          <div key={index} className="bg-white rounded-lg font-semibold shadow-lg p-4 text-center text-sm">
            {label.trim()}
          </div>
        ))} */}
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Vegan</td>
              <td className="py-2 px-4 w-[75%]">{vegan}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Vegetarian</td>
              <td className="py-2 px-4 w-[75%]">{vegetarian}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Allergens</td>
              <td className="py-2 px-4 w-[75%]">{allergens.join(", ")}</td>
            </tr>
          </tbody>
        </table>

        {vegan === "Maybe" || vegetarian === "Maybe" ? (
          <>
            <h1 className="pt-6 font-semibold pb-2">Maybe Ingredients:</h1>
            {maybeIngredients?.map((item, index) => (
              <span key={index} className="pt-1">
                {item}
                {index !== maybeIngredients.length - 1 && ", "}
              </span>
            ))}
          </>
        ) : null}
      </div>
    </section>
  );
};

export default ClassificationSection;
