import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCar } from "../redux/reducer";
import Button from "./ui/Button";

const XmlFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".xml")) {
      setSelectedFile(file);
    } else {
      console.error("Invalid file format. Please select an XML file.");
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      readXmlFile(selectedFile);
    } else {
      console.error("No file selected.");
    }
  };

  const readXmlFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const xmlString = e.target.result;
      upload(xmlString);
    };
    reader.readAsText(file);
  };

  const upload = (xmlString) => {
    const xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");

    const saleNodes = xmlDoc.querySelectorAll("sale");
    const cars = Array.from(saleNodes).map((saleNode) => {
      const id = saleNode.getAttribute("id");
      const nameElement = saleNode.querySelector("name").textContent;
      const sellDateElement = saleNode.querySelector("sellDate").textContent;
      const priceElement = saleNode.querySelector("price").textContent;
      const vatElement = saleNode.querySelector("vat").textContent;

      return {
        id,
        name: nameElement,
        sellDate: sellDateElement,
        price: priceElement,
        vat: vatElement,
      };
    });

    dispatch(addCar(cars));
    navigate("/list");
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded rounded-b-none cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {selectedFile ? (
              <h2 className="font-semibold text-lg text-white/80">
                {selectedFile.name}
              </h2>
            ) : (
              <>
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">XML</p>
              </>
            )}
          </div>
          <input
            onChange={handleFileChange}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>

      <Button button onClick={handleUpload} className="rounded-t-none">
        Upload XML
      </Button>
    </div>
  );
};

export default XmlFileUpload;
