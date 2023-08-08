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
        <table className="bg-white w-full shadow-lg">
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[25%]">Vegan</td>
              <td className="py-2 px-4 w-[80%]">{vegan}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[25%]">Vegetarian</td>
              <td className="py-2 px-4 w-[80%]">{vegetarian}</td>
            </tr>
            {/* <tr className="border-b">
              <td className="py-2 px-4 font-semibold w-[25%]">Allergens</td>
              <td className="py-2 px-4 w-[80%]">{allergens.join(", ")}</td>
            </tr> */}

            {vegan === "Maybe" || vegetarian === "Maybe" ? (
              <tr className="border-b">
                <td className="py-2 px-4 font-semibold w-[25%]">
                  Not sure about
                </td>
                <td className="py-2 px-4 w-[80%]">
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
            <td className="py-2 px-4 font-semibold w-[25%]">Allergens</td>
            <td className="py-2 px-4 w-[80%]">
              {allergens[0] !== "" ? allergens.join(", ") : "N/A"}
            </td>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClassificationSection;
