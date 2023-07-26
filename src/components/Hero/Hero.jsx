import React, { useState, useEffect, useRef } from "react";
// import { BarcodeFormat } from '@zxing/browser';
import { BrowserBarcodeReader, BrowserMultiFormatReader } from "@zxing/library";
// import { BrowserCodeReader, BrowserMultiFormatReader } from '@zxing/browser';  //Unstable
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import toggleTorch from "./torch";
import { getDeviceLocation } from "./geoLocation";
// import { reverseGeoLocation } from "./reverseGeoLocation";
import handleUsername from "./username";
import Greeting from "./Greeting";
import ProductInfo from "./ProductInfo";
import FeaturesIcons from "./FeaturesIcons";

export default function Hero() {
  const [barcodeValue, setBarcodeValue] = useState("");
  const [startScan, setStartScan] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [torchEnabled, setTorchEnabled] = useState(false);
  const [apiStatus, setApiStatus] = useState("Scanning...");
  const [scanButtonState, setScanButtonState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null);
  const prevBarcodeValueRef = useRef("");
  const maxRetries = 3;
  const retriesRef = useRef(1);

  useEffect(() => {
    handleUsername();
    getDeviceLocation(setLatitude, setLongitude, setUserLocation)
      .then(() => getCurrentTimeStamp())
      .catch((error) =>
        console.error("Error in handleScanButtonClick:", error)
      );
    setStartScan(true);
    // console.log("Scan start", startScan);
    // setModalOpen(true);
  }, []);

  useEffect(() => {
    let codeReader;

    if (startScan) {
      // codeReader = new BrowserBarcodeReader();
      codeReader = new BrowserMultiFormatReader();
      codeReaderRef.current = codeReader;

      try {
        const videoElement = videoRef.current;
        // codeReader.decodeFromVideoDevice(
        //   undefined,
        //   videoElement,
        //   handleScannerUpdate
        // );

        // const formats = BarcodeFormat.ALL_FORMATS;
        // codeReader.decodeFromVideoElement(undefined, videoElement, handleScannerUpdate, formats);
        codeReader.decodeFromVideoDevice(
          undefined,
          videoElement,
          handleScannerUpdate
        );
      } catch (err) {
        console.error(err);
      }
    }

    return () => {
      if (codeReader && typeof codeReader.reset === "function") {
        codeReader.reset();
      }
    };
  }, [startScan]);

  const handleScannerUpdate = (result) => {
    if (result && result.getText()) {
      const barcodeData = result.getText();
      // setData(barcodeData);
      setBarcodeValue(barcodeData);
      // setTorchEnabled(false);
    }
  };

  useEffect(() => {
    // if (barcodeValue && barcodeValue !== prevBarcodeValueRef.current) {
    if (barcodeValue) {
      // prevBarcodeValueRef.current = barcodeValue;
      postData();
      // setStartScan(false);
      setApiData(null);
    }
  }, [barcodeValue]);

  const postData = async () => {
    setApiStatus("Sending POST Request of barcode: " + barcodeValue);
    setStartScan(false);
    console.log(barcodeValue);
    const POST_URL = `https://api.iplaya.in/barcode/v1/barcode`;
    try {
      const postResponse = await axios.post(POST_URL, {
        number: [barcodeValue],
      });
      console.log(postResponse);

      setTimeout(() => {
        fetchData();
      }, 3000);
    } catch (error) {
      console.error("Error in POST request: ", error);
      toast.error("Error in POST request", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const fetchData = async () => {
    try {
      setApiStatus("Sending GET Request");
      // console.log("Fetch" + barcodeValue)
      const API_URL = `https://api.iplaya.in/barcode/v1/barcode?type=json&barcode=${barcodeValue}`;
      const response = await axios.get(API_URL);
      if (response.status === 200 && response?.data !== "") {
        console.log(response?.data);
        // console.log(response?.data?.data);
        setApiData(response?.data);
        // setStartScan(false);
        // console.log(response.data.response.barcode)
        retriesRef.current = 1;
        // console.log(response.data.data.response);
      } else {
        if (retriesRef.current <= maxRetries && response?.data === "") {
          toast.info(`Trying to fetch data ${retriesRef.current}`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          retriesRef.current++;
          console.log(response);
          await fetchData();
        } else {
          setApiStatus(`No data found for ${barcodeValue}`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error fetching the data", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      if (retriesRef.current >= maxRetries) {
        retriesRef.current = 1;
        setBarcodeValue("");
      }
      setScanButtonState(true);
      // setStartScan(false);
    }
  };

  const getCurrentTimeStamp = () => {
    const timeStamp = Date.now();
    const dateObj = new Date(timeStamp);

    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();

    setDateTime(date + " " + time);
    // return date + " " + time;
  };

  const handleScanButtonClick = () => {
    if (inputValue && inputValue.trim() !== "") {
      setBarcodeValue(null);
      setBarcodeValue(inputValue.trim());
      // } else if(prevBarcodeValueRef.current == barcodeValue){
      //   setBarcodeValue(prevBarcodeValueRef.current);
      // }
    }

    setInputValue("");
    setApiData(null);
    // setScanButtonState(false);
    setStartScan(true);
    setApiStatus("Scanning...");
  };

  // const handleScanButtonClick = () => {
  //   setStartScan(true);
  //   getDeviceLocation(setLatitude, setLongitude, setUserLocation)
  //   .then(() => getCurrentTimeStamp())
  //   .catch((error) => console.error("Error in handleScanButtonClick:", error));
  // };

  // const handleClearButtonClick = () => {
  //   setData("Not Found");
  //   setBarcodeValue("");
  // };

  // const handleToggleTorch = () => {
  //   toggleTorch(videoRef, torchEnabled, setTorchEnabled);
  // };

  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-2xl font-bold m-2">Food Scan Genius</h1>
        <h1 className="text-center font-semibold mt-2">
          Stay healthy, buy better
        </h1>
        <h1 className="text-center font-semibold mb-2">
          Scan products to know details in a Jiffy
        </h1>
        <h4 className="text-center">
          <Greeting />
        </h4>
      </div>
      <div className="barcode-scanner m-3 relative">
        <div
          className={`scanner-effect absolute top-0 left-0 right-0 bottom-0 border-2 border-green-500 ${
            videoRef && startScan && !apiData
              ? "animate-[scannerAnimation_5s_linear_infinite]"
              : "border-0 border-none animate-none"
          } pointer-events-none`}
        />
        {videoRef && startScan && !apiData ? (
          <video ref={videoRef} className="video rounded-lg"></video>
        ) : (
          <img src="/logo.jpg" />
        )}
      </div>

      {apiData && !startScan ? (
        <p className="scanned-data text-lg m-3 font-semibold w-[80%] text-center">
          {apiData === ""
            ? `No result found for ${barcodeValue}`
            : `Barcode Data for ${barcodeValue} is : ${apiData.barcode}`}
        </p>
      ) : (
        <>
          {!apiData && (
            <h1 className="text-center text-lg font-bold">{apiStatus}</h1>
          )}
          <h1 className="text-center text-lg font-bold">
            Detected Barcode value: {barcodeValue ? barcodeValue : "-"}
          </h1>
        </>
      )}
      <div className="flex flex-col justify-center items-center w-1/2 gap-3 mt-3 mb-3">
        <section className="flex flex-col md:flex-row my-4 justify-center items-center">
          <input
            type="number"
            min={0}
            inputMode="numeric"
            placeholder="Scan/Enter Barcode"
            className="outline-none border border-r-0 md:border-r md:border-green-500 rounded-tl-md rounded-bl-md md:rounded-tl-md md:rounded-bl-none px-4 py-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="scan-btn p-2 bg-green-600 text-white w-full rounded font-medium md:w-1/2 md:rounded-tl-md md:rounded-bl-md md:border-l md:border-green-500 md:px-4 md:py-2 mt-2 md:mt-0"
            onClick={handleScanButtonClick}
          >
            Scan
          </button>
        </section>

        <FeaturesIcons />
        {/* <button
          className="scan-btn p-2 bg-green-600 text-white m-2 w-full rounded font-medium md:w-1/2"
          onClick={handleScanButtonClick}
        >
          Scan
        </button> */}
        {/* <button
          className="clear-data p-2 bg-red-600 text-white m-2 w-full rounded font-medium md:w-1/2"
          onClick={handleClearButtonClick}
        >
          Clear
        </button> */}
        {/* {startScan && <button
          className="torch-btn p-2 bg-blue-600 text-white m-2 w-full rounded font-medium md:w-1/2"
          onClick={handleToggleTorch}
        >
          {torchEnabled ? "Disable Torch" : "Enable Torch"}
        </button>} */}
        {/* <section>
        {modalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div
            className="fixed inset-0 opacity-50 backdrop-filter backdrop-blur-sm bg-opacity-50"
            onClick={() => setModalOpen(false)}
          ></div>
          <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg z-20 mx-0 my-auto border border-black w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <h2 className="text-2xl font-bold mb-4 text-center mx-6">Welcome to FoodScanGenius</h2>
            <p className="text-lg font-semibold my-3 text-center"><Greeting /></p>
            <button
              onClick={() => setModalOpen(false)}
              className="flex items-center justify-center mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </section> */}
        <ToastContainer position="bottom-center" theme="light" />
      </div>
      <div className="container mx-4 mb-4">
        {/* {apiData?.response} */}
        {apiData?.response && (
          <ProductInfo apiData={apiData?.response} itemsPerPage={5} />
        )}
      </div>
    </section>
  );
}
