import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FoodChoice = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <>
      <h1 className="text-center m-3 text-3xl font-semibold">FOOD CHOICES</h1>
      <section className="flex flex-col items-center justify-center mb-5">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col shadow group p-3">
            <div
              className="text-xl flex items-center justify-between cursor-pointer w-[70vw] md:w-[50vw] group-hover:text-neutral-600"
              onClick={() => handleToggle(index)}
            >
              <h1 className="font-medium mr-2 w-[50%]">{item.title}</h1>
              <span>{index === expandedItem ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            {index === expandedItem ? (
              <div className="p-2 w-[70vw] md:w-[50vw]">
                {index !== 3 ? (
                  <p>{item.desc}</p>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
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
    desc: 'By using the FoodScanGenius website (the "Website"), you agree to be bound by these Terms and Conditions of Use (the "Agreement"). Please read this Agreement carefully before using the Website.',
  },
  {
    title: "Agreement to Terms",
    desc: "You agree to be bound by this Agreement, including any future modifications, by using the Website. We reserve the right to modify this Agreement at any time, and such modifications will be effective immediately upon posting on the Website.",
  },
  {
    title: "Use of Website",
    desc: "The Website is designed to allow users to scan barcodes on food products to obtain information about those products. You may use the Website for personal, non-commercial purposes only.",
  },
  {
    title: "User Conduct",
    desc: `<p>You agree not to use the Website for any illegal or unauthorized purpose and to comply with all applicable laws and regulations. You also agree not to use the Website to:</p>
    <ul>
    <li>Transmit any viruses, worms, defects, or other harmful items;</li>
    <li>Attempt to gain unauthorized access to the Website or its servers;</li>
    <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with any person or entity;</li>
    <li>Interfere with or disrupt the operation of the Website or its servers;</li>
    <li>Engage in any activity that would constitute a criminal offense or give rise to civil liability.</li>
  </ul>`,
  },
  {
    title: "Intellectual Property Rights",
    desc: "The Website and its contents are owned by FoodScanGenius and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or otherwise use any of the Website's content without our prior written consent.",
  },
  {
    title: "Disclaimer of Warranties",
    desc: 'The Website is provided on an "as is" basis, without any warranties of any kind, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Website will be error-free, uninterrupted, or free from viruses or other harmful items.',
  },
  {
    title: "Limitation of Liability",
    desc: "FoodScanGenius will not be liable for any damages arising from the use of the Website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.",
  },
  {
    title: "Indemnification",
    desc: "You agree to indemnify and hold harmless FoodScanGenius, its officers, directors, employees, and agents from any claims, actions, or demands, including reasonable attorneys' fees, arising out of your use of the Website or any breach of this Agreement.",
  },
  {
    title: "Governing Law",
    desc: "This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which FoodScanGenius is located.",
  },
  {
    title: "Severability",
    desc: "If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
  },
  {
    title: "Entire Agreement",
    desc: "This Agreement constitutes the entire agreement between you and FoodScanGenius with respect to the use of the Website and supersedes all prior or contemporaneous agreements or understandings, whether written or oral.",
  },
  {
    title: "Acceptance of Terms",
    desc: "By using the Website, you acknowledge that you have read and understood this Agreement and agree to be bound by its terms and conditions. If you do not agree to this Agreement, please do not use the Website.",
  },
];

export default FoodChoice;
