import React from "react";
// import useOpenFoodFilesStore, {useJsonDataStore}  from "../store/store"; 
import { useJsonValue } from "../store/store";
import ProductScreenHeader from "../components/ProductScreenHeader";
import ProductScreenBody from "../components/ProductScreenBody";

const ProductScreen = () => {
  // const openFoodFiles = useOpenFoodFilesStore((state) => state.openFoodFiles);

  // const jsonData = useJsonDataStore((state) => state.jsonData);
  
  // const barcodeValue = jsonData.id;
  // const image = jsonData.image_ingredients_url;

  const barcodeValue = useJsonValue("id");
  const imageIngredientsUrl = useJsonValue("image_ingredients_url");
  const imageFrontUrl = useJsonValue("image_front_url");
  const image = imageFrontUrl || imageIngredientsUrl;
  const productName = useJsonValue("product_name")
  const brandName = useJsonValue("brands")
  const servingSize = useJsonValue("serving_size");
  const weight = useJsonValue("quantity")
  const country = useJsonValue("manufacturing_places")
  const category = useJsonValue("categories")
  const ingredients = useJsonValue("ingredients_text");
  const nutritionDataGram = useJsonValue("nutrition_data_per");
  const nutritionData = useJsonValue("nutriments");
  const labels = useJsonValue("labels")

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <header className="bg-white shadow-md">
        <h1 className="text-xl font-semibold text-center mb-1">Product Screen</h1>
      </header> */}

      <div className="max-w-screen-lg mx-auto">
        <ProductScreenHeader
          barcodeValue={barcodeValue}
          image={image}
          productName={productName}
          brandName={brandName}
          servingSize={servingSize}
          weight={weight}
        />

        <ProductScreenBody
          barcodeValue={barcodeValue}
          image={image}
          productName={productName}
          brandName={brandName}
          servingSize={servingSize}
          weight={weight}
          country={country}
          category={category}
          ingredients={ingredients}
          nutritionDataGram={nutritionDataGram}
          nutritionData={nutritionData}
          labels={labels}
        />
      </div>
    </div>
  );
};

export default ProductScreen;