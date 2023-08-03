import React from "react";

const IngredientsSection = ({ ingredientsList }) => {
  return (
    <section className="w-[80%] my-1 mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <table className="w-full">
          <tbody>
            {ingredientsList?.map((ingredient, index) => (
              <React.Fragment key={index}>
                <tr className="border-b">
                  <td className="py-2 px-4 font-semibold w-[50%]">
                    {ingredient.key}
                  </td>
                  <td className="py-2 px-4 w-[75%]">{ingredient.value}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IngredientsSection;
