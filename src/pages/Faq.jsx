import React, { useState } from "react";
import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <>
      <h1 className="text-center m-3 text-3xl font-semibold">FAQs</h1>
      <section className="flex flex-col items-center justify-center mb-5">
          {data.map((item, index) => (
            <div key={index} className='flex flex-col shadow group p-4'>
              <div
                className="text-xl flex items-center justify-between cursor-pointer w-[70vw] md:w-[50vw] group-hover:text-neutral-600"
                onClick={() =>
                  setExpandedItem(index === expandedItem ? null : index)
                }
              >
                <h1 className="font-medium mr-2 w-[50%]">{item.title}</h1>
                <span>{index === expandedItem ? <FaMinus /> : <FaPlus />}</span>
              </div>
              {index === expandedItem && (
                <div className="p-2 mt-2 w-[70vw] md:w-[50vw]">
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
    title: "1. What is FoodScanGenius?",
    desc: "FoodScanGenius is a powerful and user-friendly app that allows you to scan barcodes and obtain detailed information about food ingredients. It helps you make informed choices by providing comprehensive data about allergens, dietary restrictions, and nutritional content.",
  },
  {
    title: "2. How does FoodScanGenius work?",
    desc: "Simply scan the barcode of a food product using the app's built-in scanner, and FoodScanGenius will instantly analyze the ingredients and provide you with a detailed breakdown. The app utilizes advanced AI technology to identify allergens, highlight dietary restrictions, and offer personalized recommendations.",
  },
  {
    title: "3. Can FoodScanGenius accommodate specific dietary needs?",
    desc: "Absolutely! FoodScanGenius is designed to cater to a wide range of dietary needs, including vegetarian, vegan, gluten-free, and more. You can customize your preferences within the app to receive accurate information based on your specific dietary requirements.",
  },
  {
    title: "4. Is FoodScanGenius available in my country?",
    desc: "FoodScanGenius is available in multiple countries worldwide. We are continuously expanding our coverage to ensure that users from various regions can benefit from the app's features. Please check the app store or website to see if FoodScanGenius is available in your country.",
  },
  {
    title: "5. How accurate is the information provided by FoodScanGenius?",
    desc: "We strive to provide the most accurate and up-to-date information possible. FoodScanGenius relies on extensive databases and partnerships with trusted sources to ensure the accuracy of ingredient information, allergen identification, and nutritional data. However, please note that manufacturers occasionally update their product formulations, so we recommend double-checking with the product packaging if you have any concerns or allergies.",
  },
  {
    title: "6. Can I save and track my scanned products?",
    desc: "Absolutely! FoodScanGenius allows you to save and track the products you scan for easy reference. You can create personalized lists, favorites, and even set reminders for items you frequently purchase.",
  },
  {
    title: "7. Is FoodScanGenius available for both iOS and Android?",
    desc: "Yes, FoodScanGenius is available for both iOS and Android devices. You can download it from the App Store or Google Play Store, depending on your device.",
  },
  {
    title: "8. How secure is my data?",
    desc: "We take data security and privacy seriously. FoodScanGenius follows industry best practices to safeguard your personal information. For more details, please refer to our privacy policy.",
  },
  {
    title: "9. How can I contact support if I have further questions?",
    desc: "If you have any additional questions, feedback, or need assistance, please don't hesitate to reach out to our support team at 'bv@digitalrtm.com'. We're here to help!",
  },
];

export default Faq;
