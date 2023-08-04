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
      <div className="rounded-lg p-1">
        {/* {labelsArray?.map((label, index) => (
          <div key={index} className="bg-white rounded-lg font-semibold shadow-lg p-4 text-center text-sm">
            {label.trim()}
          </div>
        ))} */}
        <table className="bg-white w-full shadow-lg">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Vegan</td>
              <td className="py-2 px-4 w-[75%]">{vegan}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Vegetarian</td>
              <td className="py-2 px-4 w-[75%]">{vegetarian}</td>
            </tr>
            {/* <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[50%]">Allergens</td>
              <td className="py-2 px-4 w-[75%]">{allergens.join(", ")}</td>
            </tr> */}

            {vegan === "Maybe" || vegetarian === "Maybe" ? (
              <tr className="border-b">
                <td className="py-2 px-4 font-semibold w-[50%]">
                  Not sure about
                </td>
                <td className="py-2 px-4 w-[75%]">
                  {maybeIngredients?.map((item, index) => (
                    <span key={index}>
                      {item}
                      {index !== maybeIngredients.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        <table className="bg-white w-full shadow-lg mt-8">
          <tbody>
            <tr className="border-b"></tr>
            <td className="py-2 px-4 font-semibold w-[50%]">Allergens</td>
            <td className="py-2 px-4 w-[75%]">
              {allergens[0] !== "" ? allergens.join(", ") : "N/A"}
            </td>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClassificationSection;
