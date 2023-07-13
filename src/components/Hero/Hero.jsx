import React, { useState, useEffect, useRef } from "react";
import { BrowserBarcodeReader } from "@zxing/library";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import toggleTorch from "./torch";
import { getDeviceLocation } from "./geoLocation";
// import { reverseGeoLocation } from "./reverseGeoLocation";
import handleUsername from "./username";
import Greeting from "./Greeting";
import ProductInfo from "./ProductInfo";

export default function Hero() {
  // const [data, setData] = useState("Not Found");
  const [barcodeValue, setBarcodeValue] = useState("");

  const [startScan, setStartScan] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [torchEnabled, setTorchEnabled] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null);
  const prevBarcodeValueRef = useRef("");
  const fetchDataRef = useRef(false);
  const maxRetries = 3;
  const retriesRef = useRef(0);

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
      codeReader = new BrowserBarcodeReader();
      codeReaderRef.current = codeReader;

      try {
        const videoElement = videoRef.current;
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
      if (codeReader) {
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
    const postData = async () => {
      // console.log("Inside post")
      const POST_URL = `https://api.iplaya.in/barcode/v1/barcode`;
      const postResponse = await axios.post(
        POST_URL,
        {
          data: {
            number: barcodeValue,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
      console.log(postResponse);
      // console.log("Post" + barcodeValue)
      setTimeout(await fetchData(), 3000);
    };

    const fetchData = async () => {
      try {
        // console.log("Inside fetch")
        // console.log("Fetch" + barcodeValue)
        const API_URL = `https://api.iplaya.in/barcode/v1/barcode?type=json&barcode=${barcodeValue}`;
        const response = await axios.get(API_URL);
        if (response.status === 200 && response.data.response !== "") {
          setApiData(response?.data);
          setStartScan(false);
          console.log(response);
        } else {
          if (
            retriesRef.current <= maxRetries &&
            response.data.response === ""
          ) {
            await fetchData();
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
          retriesRef.current = 0;
          setBarcodeValue("");
          // postData();
        }
        // setBarcodeValue("");
        setStartScan(true);
        // if(apiData === null){
        //   setStartScan(true);
        // }
      }
    };

    if (barcodeValue && barcodeValue !== prevBarcodeValueRef.current) {
      prevBarcodeValueRef.current = barcodeValue;
      postData();
      setApiData(null);
    }
  }, [barcodeValue]);

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

  const getCurrentTimeStamp = () => {
    const timeStamp = Date.now();
    const dateObj = new Date(timeStamp);

    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();

    setDateTime(date + " " + time);
    // return date + " " + time;
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-2xl font-bold m-2">Food Scan Genius</h1>
        <h4>
          <Greeting />
        </h4>
      </div>
      <div className="barcode-scanner m-3 relative">
        <div
          className={`scanner-effect absolute top-0 left-0 right-0 bottom-0 border-2 border-green-500 ${
            barcodeValue
              ? "border-0 border-none animate-none"
              : "animate-[scannerAnimation_5s_linear_infinite]"
          } pointer-events-none`}
        />
        <video ref={videoRef} className="video rounded-lg" />
      </div>

      {apiData && startScan ? (
        <p className="scanned-data text-lg m-3 font-semibold w-[80%] text-center">
          Barcode Value: {apiData?.barcode === "" ? "No result found" : apiData?.barcode}
        </p>
      ) : (
        <h1 className="text-center text-lg font-bold">Scanning...</h1>
      )}
      <div className="flex flex-col justify-center items-center w-1/2 md:flex-row mb-3">
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
        {/* <button
          className="torch-btn p-2 bg-blue-600 text-white m-2 w-full rounded font-medium md:w-1/2"
          onClick={handleToggleTorch}
        >
          {torchEnabled ? "Disable Torch" : "Enable Torch"}
        </button> */}
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
        {apiData?.response && <ProductInfo apiData={apiData} itemsPerPage={5} />}
      </div>
    </section>
  );
}
