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
      <section className="flex flex-col justify-center max-w-[100%] px-4 py-2">
        <h1 className="text-md font-semibold text-center md:text-center">Barcode Number: {barcodeValue}</h1>
            <h1 className="text-md text-center font-semibold mb-1">Product Name: {productName}</h1>
        <main className="flex flex-col md:flex-row gap-1 items-center justify-center border border-black my-0 mx-auto md:my-0 md:mx-auto md:w-fit md:m-1 p-1 bg-white rounded-lg shadow-md">
          <div className="text-center text-md md:text-left">
            <h2 className="text-gray-900">Brand: {brandName}</h2>
            <p className="text-gray-900">Serving size: {servingSize}</p>
            <p className="text-gray-900 mb-1">Weight: {weight}</p>
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