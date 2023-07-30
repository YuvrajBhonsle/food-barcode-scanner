const ProductScreenHeader = ({
  barcodeValue,
  image,
  productName,
  brandName,
  servingSize,
  weight,
}) => {
  return (
    <div className="max-w-full">
      <section className="flex flex-col justify-center max-w-[100%] px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4 text-center md:text-justify">Barcode Number: {barcodeValue}</h1>
        <main className="flex flex-col md:flex-row gap-4 items-center justify-center border border-black my-0 mx-auto md:m-1 p-4 bg-white rounded-lg shadow-md">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold mb-2">{productName}</h1>
            <h2 className="text-lg mb-2">{brandName}</h2>
            <p className="text-gray-600 mb-2">{servingSize}</p>
            <p className="text-gray-600">{weight}</p>
          </div>
          <img
            className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] object-contain object-center rounded"
            src={image ? image : "/logo.jpg"}
            alt="product-image"
          />
        </main>
      </section>
    </div>
  );
};

export default ProductScreenHeader;