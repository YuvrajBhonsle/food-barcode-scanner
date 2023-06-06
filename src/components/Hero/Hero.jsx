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

export default function Hero() {
  // const [data, setData] = useState("Not Found");
  const [barcodeValue, setBarcodeValue] = useState("");
  const [apiData, setApiData] = useState("");
  const [startScan, setStartScan] = useState(false);
  const [dateTime, setDateTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [torchEnabled, setTorchEnabled] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null);

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
    const fetchData = async () => {
      try {
        // console.log(navigator.userAgent);

        // console.log("Lat:", latitude);
        // console.log("Lon:", longitude);
        // console.log(dateTime);
        // console.log(userLocation);
        // console.log(dateTime);
        const API_URL = `http://ec2-13-49-238-207.eu-north-1.compute.amazonaws.com:9090/barcode/v1/barcode?type=json&barcode=${barcodeValue}`;
        // console.log(barcodeValue);
        const response = await axios.get(API_URL);
        if(response.status === 200){
          const textData = response.data;
          // console.log("textData: ", textData);
          setApiData(textData[0].data.barcode);
          // console.log(barcodeValue);
          // setApiData(textData);
          // setBarcodeValue("");
          setStartScan(false);
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
      } finally{
        setBarcodeValue("");
        setStartScan(true);
      }
    };

    if (barcodeValue) {
      fetchData();
      setApiData("");
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
      <div className="barcode-scanner m-3">
        <video ref={videoRef} className="video rounded-lg" />
      </div>
      <p className="scanned-data text-lg m-3 font-semibold w-[80%] text-center">
        Barcode Value: {barcodeValue}
      </p>
      <h1 className="scanned-data text-lg my-3 mx-auto font-bold w-[50%] md:[50%] text-center">
      API data: {apiData}</h1>
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
    </section>
  );
}
