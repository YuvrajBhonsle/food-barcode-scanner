import React, { useState } from "react";

// const ProductInfo = ({ apiData, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(Object.keys(apiData).length / itemsPerPage);
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   const getPageNumbersToShow = () => {
//     if (totalPages <= 5) {
//       return pageNumbers;
//     }

//     const firstPageNumbers = pageNumbers.slice(0, 3);
//     const lastPageNumber = pageNumbers[totalPages - 1];

//     if (currentPage <= 3) {
//       return [...firstPageNumbers, "...", lastPageNumber];
//     }

//     if (currentPage >= totalPages - 2) {
//       return [1, "...", ...pageNumbers.slice(totalPages - 3)];
//     }

//     return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", lastPageNumber];
//   };

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const slicedData = Object.entries(apiData).slice(startIndex, endIndex);

//   return (
//     <div className="overflow-x-auto mx-4 sm:mx-6">
//       <table className="mx-auto my-0 w-[50%] border-collapse table-auto sm:w-1/2 sm:mx-auto sm:my-0 md:w-1/2 md:mx-auto md:my-0">
//         <thead>
//           <tr>
//             <th className="p-2 border-r bg-gray-900 rounded-tl-lg text-white border-gray-300">Category</th>
//             <th className="p-2 bg-gray-900 rounded-tr-lg text-white border-gray-300">Value</th>
//           </tr>
//         </thead>
//         <tbody className="bg-gray-100 text-black border rounded-b-lg">
//           {slicedData.map(([key, value]) => (
//             <tr key={key}>
//               <td className="p-2 text-center px-6 border border-gray-300 sm:w-1/3 md:w-1/4 lg:w-[50%] xl:w-[50%]">
//                 {key}
//               </td>
//               <td className="p-2 px-4 text-center border border-gray-300 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-4/6">
//                 {value === "" ? "❌" : value}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-center mt-4 mx-2 sm:mx-6">
//         <button
//           className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 ${
//             currentPage > 1 ? "bg-gray-700 text-white" : "bg-gray-300"
//           } rounded`}
//           onClick={goToPreviousPage}
//           disabled={currentPage <= 1}
//         >
//           Prev
//         </button>
//         {getPageNumbersToShow().map((pageNumber, index) => (
//           <React.Fragment key={index}>
//             {pageNumber === "..." ? (
//               <span className="mx-1 flex items-center justify-center">...</span>
//             ) : (
//               <button
//                 className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 ${
//                   pageNumber === currentPage ? "bg-gray-700 text-white" : "bg-gray-300"
//                 } rounded`}
//                 onClick={() => goToPage(pageNumber)}
//               >
//                 {pageNumber}
//               </button>
//             )}
//           </React.Fragment>
//         ))}
//         <button
//           className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 ${
//             currentPage !== totalPages ? "bg-gray-700 text-white" : "bg-gray-300"
//           } rounded`}
//           onClick={goToNextPage}
//           disabled={currentPage >= totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

const ProductInfo = ({ apiData, itemsPerPage }) => {
  const responseObj = JSON.parse(apiData?.response);
  const totalPages = Math.ceil(Object.keys(responseObj).length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = Object.entries(responseObj).slice(startIndex, endIndex);

  return (
    <div className="overflow-x-auto mx-4 sm:mx-6">
      <table className="mx-auto my-0 w-[50%] border-collapse table-auto sm:w-1/2 sm:mx-auto sm:my-0 md:w-1/2 md:mx-auto md:my-0">
        <thead>
          <tr>
            <th className="p-2 border-r bg-gray-900 rounded-tl-lg text-white border-gray-300">Category</th>
            <th className="p-2 bg-gray-900 rounded-tr-lg text-white border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 text-black border rounded-b-lg">
          {slicedData.map(([key, value]) => (
            <tr key={key}>
              <td className="p-2 text-center px-6 border border-gray-300 sm:w-1/3 md:w-1/4 lg:w-[50%] xl:w-[50%]">
                {key}
              </td>
              <td className="p-2 px-4 text-center border border-gray-300 sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-4/6">
                {value === "" ? "❌" : value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 mx-2 sm:mx-6">
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 ${
            currentPage > 1 ? "bg-gray-700 text-white" : "bg-gray-300"
          } rounded`}
          onClick={goToPreviousPage}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 ${
              currentPage === index + 1 ? "bg-gray-700 text-white" : "bg-gray-300"
            } rounded`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-2 sm:px-4 py-1 sm:py-2 mx-1 ${
            currentPage !== totalPages ? "bg-gray-700 text-white" : "bg-gray-300"
          } rounded`}
          onClick={goToNextPage}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;