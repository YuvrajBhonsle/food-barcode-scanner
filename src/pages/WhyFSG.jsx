import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const WhyFSG = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <>
      <h1 className="text-center m-3 text-3xl font-semibold">
        Why FoodScanGenius?
      </h1>
      <section className="flex flex-col items-center justify-center mb-5">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col shadow group p-3">
            <div
              className="text-xl flex items-center justify-between cursor-pointer w-[70vw] md:w-[50vw] group-hover:text-neutral-600"
              onClick={() => handleToggle(index)}
            >
              <h1 className="font-medium mr-2 w-[50%]">{item.title}</h1>
              <span>
              {expandedItems.includes(index) ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
              </span>
            </div>
            {expandedItems.includes(index) ? (
              <div className="p-2 w-[70vw] md:w-[50vw]">
                {index >= 2 && index <= 4 ? (
                  <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                ) : (
                  <p>{item.desc}</p>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </section>
    </>
  );
};

const data = [
  {
    title: "Welcome to FoodScanGenius",
    desc: "An App to Check if Products are Suitable for Consumers Using a Barcode Scan of the Packaging",
  },
  {
    title: "Introducing FoodScanGenius",
    desc: "Welcome to FoodScanGenius, the app that helps you make informed decisions about the products you buy and eat. Our app utilizes advanced barcode scanning technology to provide you with all the information you need about a product, including its nutritional value, allergens, and suitability for your dietary requirements.",
  },
  {
    title: "App Features",
    desc: `<ul>
    <li>Barcode scanning technology to instantly retrieve detailed product information</li>
    <li>Customizable dietary preferences and allergen alerts</li>
    <li>Personalized recommendations for healthy products based on your profile</li>
    <li>Product comparison tool to assist you in making informed decisions</li>
  </ul>`,
  },
  {
    title: "Target Audience",
    desc: `<p>Our app is designed for health-conscious individuals who are passionate about making informed decisions regarding the food they consume. Our target audience includes:</p>
    <ul>
      <li>Fitness enthusiasts</li>
      <li>Individuals with dietary restrictions or food allergies</li>
      <li>Health-conscious consumers who prioritize nutrition and wellness</li>
    </ul>`,
  },
  {
    title: "How to Use the App",
    desc: `<ol>
    <li>Download the FoodScanGenius app from the App Store or Google Play.</li>
    <li>Create a profile by specifying your dietary preferences and setting up allergen alerts.</li>
    <li>Utilize the barcode scanning technology to scan product packaging and access comprehensive information about the product.</li>
    <li>Use the product comparison tool to make well-informed purchasing decisions.</li>
  </ol>`,
  },
  {
    title: "Frequently Asked Questions (FAQ)",
    desc: "For more information about the app and its features, please refer to our frequently asked questions section on our website.",
  },
  {
    title: "Affiliate Programs",
    desc: "FoodScanGenius offers affiliate programs for health and wellness products that align with our mission of promoting healthy lifestyles. Visit our website to learn more about our affiliate programs and how to get involved.",
  },
  {
    title: "Terms and Conditions",
    desc: "Prior to using the app, we kindly request that you review and agree to our terms and conditions. The terms and conditions can be found on our website.",
  },
  {
    title: "User Feedback Survey",
    desc: "We value your feedback and would appreciate it if you could take a few minutes to complete our survey. Let us know why you downloaded the app, share your experience using it, and tell us about any additional features you would like to see in the future.",
  },
  {
    title: "Legal Considerations",
    desc: "For a comprehensive understanding of the legal considerations related to the use of barcode scanning technology, we have prepared a detailed document. Please visit our website to access the information.",
  },
  {
    title: "Color Scheme",
    desc: "FoodScanGenius employs a vibrant color scheme combining shades of green and white. This choice reflects our commitment to health and wellness, cleanliness, and simplicity.",
  },
];

export default WhyFSG;
