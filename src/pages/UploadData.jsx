import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import Papa from "papaparse"; // Import Papaparse library for CSV parsing

const UploadData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    setSelectedFile(file);

    // Parse the CSV file
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data); // Set the parsed CSV data to state
      },
      header: true, // Assuming CSV has a header row
    });
  };

  const handleSave = () => {
    // Here you can implement the logic to upload the parsed CSV data to the server
    console.log("CSV Data to be uploaded:", csvData);
    // You can use fetch or any other library to send data to your server
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Upload Data" />

      <div
        id="FileUpload"
        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
      >
        <input
          type="file"
          accept="text/csv"
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          {selectedFile ? (
            <p className="border border-stroke bg-white dark:border-strokedark dark:bg-boxdark p-2 rounded-md">
              {selectedFile.name}
            </p>
          ) : (
            <p>
              <span className="text-primary">Click to upload</span> or drag and
              drop
            </p>
          )}
          <p className="mt-1.5">CSV file only</p>
        </div>
      </div>

      <div className="flex justify-end gap-4.5">
        <button
          className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
          type="button"
          onClick={() => setSelectedFile(null)} // Clear selected file
        >
          Cancel
        </button>
        <button
          className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
          type="button"
          onClick={handleSave} // Call handleSave function to upload data
        >
          Save
        </button>
      </div>

      <div className="rounded border  bg-white py-4 px-4 dark:bg-meta-4 sm:py-7.5 my-10">
        {/* Display CSV data here */}
        <h3>CSV File Data</h3>
        <table>
          <thead>
            <tr>
              {csvData.length > 0 &&
                Object.keys(csvData[0]).map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, columnIndex) => (
                  <td key={columnIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default UploadData;
