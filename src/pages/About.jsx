import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";


const About = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <>
      <h1 className="text-center my-3 text-3xl font-semibold">Welcome to FoodScanGenius</h1>
      <h1 className="text-center mb-3 text-xl font-semibold">Your Ultimate App for People with Dietary Restrictions</h1>
      <section className="flex flex-col items-center justify-center mt-2 mb-5">
          {data.map((item, index) => (
            <div key={index} className='flex flex-col shadow group p-3'>
              <div
                className="text-xl flex items-center justify-between cursor-pointer w-[70vw] md:w-[50vw] group-hover:text-neutral-600"
                onClick={() =>
                  setExpandedItem(index === expandedItem ? null : index)
                }
              >
                <h1 className="font-medium mr-2 w-[50%]">{item.title}</h1>
                <span>{index === expandedItem ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              {index === expandedItem && (
                <div className="p-2 w-[70vw] md:w-[50vw]">
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
      </section>
    </>
  );
};

const data = [
  {
    title: "Say Goodbye to Ingredient Worries",
    desc: "Are you tired of reading through endless ingredient lists? FoodScanGenius is here to make your life easier. Our barcode scanning app quickly identifies if a product contains any ingredients that you are avoiding due to allergies, sensitivities, or dietary restrictions.",
  },
  {
    title: "Simplify Your Grocery Shopping Experience",
    desc: "Gone are the days of spending hours at the grocery store trying to decipher ingredient labels. With FoodScanGenius, simply scan the barcode of any product, and our app will provide you with instant information on its suitability for your dietary needs. Save time, reduce stress, and shop with confidence.",
  },
  {
    title: "Dine Out with Confidence",
    desc: "Eating out can be a challenge when you have dietary restrictions. FoodScanGenius empowers you to make informed decisions while dining out. Just scan the barcode on the menu item, and our app will quickly let you know if it's safe for you to enjoy. Say goodbye to anxiety and enjoy dining out again.",
  },
  {
    title: "Track Your Nutrition Goals",
    desc: "FoodScanGenius goes beyond ingredient scanning. Our app helps you track your nutrition and macronutrient intake, ensuring you stay on top of your health goals. Set personalized targets, monitor your progress, and make sure you're getting the nutrients you need, even with your dietary restrictions.",
  },
  {
    title: "Download FoodScanGenius Today",
    desc: "Don't let your dietary restrictions hold you back. Take control of your food choices with FoodScanGenius. Download the app now and experience the freedom and peace of mind it provides. Simplify your life, enjoy your meals, and embrace a healthier you. 'Your-Download-Link' Download Now.",
  },
];

export default About