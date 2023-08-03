import { FiCoffee } from "react-icons/fi";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { MdDescription, MdFoodBank } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import React, {useState, useEffect} from "react";
import ClassificationSection from "./Classification";
import NutritionSection from "./Nutrients";
import IngredientsSection from "./Ingredients";
import DescriptionSection from "./Description";
import Recommendations from "./Recommendations";
import ChatGPTFsg from "./ChatGPTFSG";

const ProductScreenBody = ({
  barcodeValue,
  image,
  productName,
  brandName,
  servingSize,
  weight,
  country,
  category,
  ingredients,
  nutritionDataGram,
  nutritionData,
  labels,
  ingredientsFilter,
  allergens,
  onBackgroundColorChange,
}) => {
  const [display, setDisplay] = useState("Classification");

  const labelsArray = labels?.split(",");

  const checkVeganAndVegetarianValues = (ingredients) => {
    let vegan = "Yes";
    let vegetarian = "Yes";
    let maybeIngredients = [];

    ingredients?.forEach((ingredient) => {
      if (ingredient.vegan === "no") {
        vegan = "No";
      }
      if (ingredient.vegetarian === "no") {
        vegetarian = "No";
      }
      if (ingredient.vegan === "maybe" || ingredient.vegetarian === "maybe") {
        vegan = "Maybe";
        vegetarian = "Maybe";
        // if(ingredient.id !== ""){
        //   maybeIngredients.push(ingredient.id?.split('en:')[1])
        // } else {
        //   maybeIngredients.push(ingredient.text)
        // }
        maybeIngredients.push(ingredient.text);
      }
    });

    return { vegan, vegetarian, maybeIngredients };
  };

  const { vegan, vegetarian, maybeIngredients } =
    checkVeganAndVegetarianValues(ingredientsFilter);

    let backgroundColor;
    if (vegan === "Yes" && vegetarian === "Yes") {
      backgroundColor = "lightgreen";
    } else if (vegetarian === "No") {
      backgroundColor = "lightcoral";
    } else if (vegan === "Maybe" || vegetarian === "Maybe") {
      backgroundColor = "lightyellow";
    }

    useEffect(() => {
      // Call the callback function provided by the parent
      onBackgroundColorChange(backgroundColor);
    }, [backgroundColor, onBackgroundColorChange]);

    
  // const parseIngredients = (ingredientString) => {
  //   const regex = /([^,(]+(?: \([^)]+\))?)(?: \(([^)]+)\))?/g;
  //   const ingredientsArray = [];
  //   let match;

  //   while ((match = regex.exec(ingredientString))) {
  //     const [, ingredientName, value] = match;
  //     const processedValue = value ? value.replace(/,\s*/g, ', ') : 'N/A';
  //     ingredientsArray.push({
  //       name: ingredientName.trim(),
  //       value: processedValue,
  //     });
  //   }

  //   return ingredientsArray;
  // };

  // const ingredientsList = ingredients.split(/,(?!\s*$)(?![^(]*\))/).map(item => {
  //   const [key, ...values] = item.split(/\(([^)]*)\)/);
  //   const value = values.length > 0 ? values.join('') : 'N/A';
  //   return { key: key.trim(), value };
  // });

  const ingredientsList = ingredients
    ?.split(/,(?!\s*$)(?![^(]*\))/)
    .map((item) => {
      const [key, ...values] = item.split(/\(([^)]*)\)/);
      let value = values.length > 0 ? values.join("") : "N/A";
      if (value.includes("(") && !value.includes(")")) {
        // Add a closing parenthesis to the value if it contains an open parenthesis but no closing parenthesis
        value += ")";
      }
      return { key: key.trim(), value };
    });

  // const ingredientsList = parseIngredients(ingredients);

  // Filter out the nutriments with "_100g" in their key and have a value other than 0
  const filteredNutriments = Object.entries(nutritionData)?.filter(
    ([key, value]) => key.includes("_100g") && value !== 0
  );

  const modifiedAllergens = allergens
    ?.split(",")
    .map((allergen) => allergen.replace("en:", ""));

  return (
    <section className="mt-3 w-full overflow-scroll">
      <main className="flex items-center text-center gap-4 sm:gap-8 px-3 overflow-scroll">
        <div
          onClick={() => setDisplay("Classification")}
          className={`flex flex-col items-center cursor-pointer pb-1 ${
            display === "Classification"
              ? "border-b border-black"
              : "border-none"
          }`}
        >
          <BsFillClipboard2DataFill
            style={{
              fontSize: "2rem",
              color: display === "Classification" ? "#808080" : "black",
            }}
          />
          <h1 className="text-sm mt-1 text-center">Classification</h1>
        </div>
        <div
          onClick={() => setDisplay("Description")}
          className={`flex flex-col items-center cursor-pointer pb-1 ${
            display === "Description" ? "border-b border-black" : "border-none"
          }`}
        >
          <MdDescription
            style={{
              fontSize: "2rem",
              color: display === "Description" ? "#808080" : "black",
            }}
          />
          <h1 className="text-sm mt-1 text-center">Description</h1>
        </div>
        <div
          onClick={() => setDisplay("Ingredients")}
          className={`flex flex-col items-center cursor-pointer pb-1 ${
            display === "Ingredients" ? "border-b border-black" : "border-none"
          }`}
        >
          <MdFoodBank
            style={{
              fontSize: "2rem",
              color: display === "Ingredients" ? "#808080" : "black",
            }}
          />
          <h1 className="text-sm mt-1 text-center">Ingredients</h1>
        </div>
        <div
          onClick={() => setDisplay("Nutrition")}
          className={`flex flex-col items-center cursor-pointer pb-1 ${
            display === "Nutrition" ? "border-b border-black" : "border-none"
          }`}
        >
          <GiMuscleUp
            style={{
              fontSize: "2rem",
              color: display === "Nutrition" ? "#808080" : "black",
            }}
          />
          <h1 className="text-sm mt-1 text-center">Nutrition</h1>
        </div>
        <div
          onClick={() => setDisplay("Recommendations")}
          className={`flex flex-col items-center cursor-pointer pb-1 ${
            display === "Recommendations"
              ? "border-b border-black"
              : "border-none"
          }`}
        >
          <FaThumbsUp
            style={{
              fontSize: "1.75rem",
              color: display === "Recommendations" ? "#808080" : "black",
            }}
          />
          <h1 className="text-sm mt-1 text-center">Recommendations</h1>
        </div>
        <div
          onClick={() => setDisplay("ChatGPTFsg")}
          className={`flex flex-col items-center cursor-pointer pb-1 ${
            display === "ChatGPTFsg" ? "border-b border-black" : "border-none"
          }`}
        >
          <SiOpenai
            style={{
              fontSize: "1.75rem",
              color: display === "ChatGPT@FSG" ? "gray" : "black",
            }}
          />
          <h1 className="text-sm mt-1 text-center">ChatGPT@FSG</h1>
        </div>
      </main>

      <div className="max-w-full py-2">
        {display === "Classification" && (
          <ClassificationSection
            labelsArray={labelsArray}
            vegan={vegan}
            vegetarian={vegetarian}
            maybeIngredients={maybeIngredients}
            allergens={modifiedAllergens}
          />
        )}
        {display === "Description" && (
          <DescriptionSection
            brandName={brandName}
            weight={weight}
            country={country}
            category={category}
            servingSize={servingSize}
          />
        )}
        {display === "Ingredients" && (
          <IngredientsSection ingredientsList={ingredientsList} />
        )}
        {display === "Nutrition" && (
          <NutritionSection
            filteredNutriments={filteredNutriments}
            nutritionDataGram={nutritionDataGram}
          />
        )}
        {display === "Recommendations" && <Recommendations />}
        {display === "ChatGPTFsg" && <ChatGPTFsg />}
      </div>
    </section>
  );
};

export default ProductScreenBody;
