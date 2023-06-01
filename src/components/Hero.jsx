import React, {useState, useEffect, useRef} from 'react'
import { BrowserBarcodeReader } from '@zxing/library';

export default function Hero() {
  const [data, setData] = useState('Not Found');
  const [barcodeValue, setBarcodeValue] = useState('');
  const [startScan, setStartScan] = useState(false);
  const videoRef = useRef(null);
  const codeReaderRef = useRef(null);

  useEffect(() => {
    let codeReader;

    if (startScan) {
      codeReader = new BrowserBarcodeReader();
      codeReaderRef.current = codeReader;

      try {
        const videoElement = videoRef.current;
        codeReader.decodeFromVideoDevice(undefined, videoElement, handleScannerUpdate);
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
      setData(barcodeData);
      setBarcodeValue(barcodeData);
      // setStartScan(false);
    }
  };

  const handleScanButtonClick = () => {
    setStartScan(true);
  };

  const handleClearButtonClick = () => {
    setData('Not Found');
    setBarcodeValue('');
  };

  return (
    <section className='flex flex-col justify-center items-center'>
      <div>
        <h1 className='text-center text-2xl font-bold m-2'>Food Scan Genius</h1>
      </div>
      <div className="barcode-scanner m-3">
        <video ref={videoRef} className="video rounded-lg" />
      </div>
      <h1 className="scanned-data text-xl m-3 font-bold">Barcode Value: {barcodeValue}</h1>
      <div className='flex flex-col justify-center items-center w-1/2 md:flex-row mb-3'>
      <button className="scan-btn p-2 bg-green-600 text-white m-2 w-full rounded font-medium md:w-1/4" onClick={handleScanButtonClick}>
        Scan
      </button>
      <button className="clear-data p-2 bg-red-600 text-white w-full rounded font-medium md:w-1/4" onClick={handleClearButtonClick}>
        Clear
      </button>
      </div>
    </section>
  );
}