import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import ExcelTemplateGenerator from './ExcellTemplateGenartor';
import { parseExcelData } from '../../utils/excelparser';
import { storeWithExpiry } from '../../utils/localstorageWithExpiry';

const FileUpload = ({ exportname, showFileUpload,templateData,navigateTo ,closeDialog}) => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const validTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
    'text/csv',
  ];
  const maxSize = 10 * 1024 * 1024;

  const processAndStoreFile = async (file) => {
    try {
      setUploading(true);
      setProgress(5);
  
      // Simulate loading animation
      const slowProgress = (target, delay = 200) =>
        new Promise((resolve) => {
          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= target) {
                clearInterval(interval);
                resolve();
                return target;
              }
              return prev + 10;
            });
          }, delay);
        });
  
      await slowProgress(30); // Slowly go to 30%
      const parsedData = await parseExcelData(file, templateData);
  
      await slowProgress(70); // Continue to 70%
      storeWithExpiry(exportname || 'uploadedData', parsedData, 24 * 60 * 60 * 1000);
  
      await slowProgress(100); // Finish to 100%
  
      setTimeout(() => {
        setUploading(false);
        navigate(`${navigateTo}?refresh=`+ Date.now());
        closeDialog()
      }, 500);
    } catch (err) {
      setUploading(false);
      setError(err.message);
    }
  };
  
  

  const validateAndSetFile = (file) => {
    if (!file) return;
    if (!validTypes.includes(file.type)) {
      setError('Unsupported file type. Only .xlsx, .xls, and .csv are allowed.');
      return;
    }
    if (file.size > maxSize) {
      setError('File size exceeds 10MB limit.');
      return;
    }

    setError('');
    setSelectedFile(file);
    processAndStoreFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();


  return (
    showFileUpload && (
      <div className="py-3 relative">
        <ExcelTemplateGenerator name={exportname} templateData={templateData} />
        <div
          className="border border-gray-200 rounded-lg p-6 text-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h3 className="font-medium text-gray-800 mb-2">Upload Excel File</h3>
          <p className="text-sm text-gray-500 mb-4">Drag and drop here or browse, Only Gived Excel Template file after adding values </p>

          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded text-sm"
            onClick={() => fileInputRef.current.click()}
          >
            Choose File
          </button>

          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />


          {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

          <p className="text-xs text-gray-400 mt-4">
            Supported formats: .xlsx, .xls, .csv
            <br />
            Maximum file size: 10MB
          </p>
          
          {uploading && (
            <div className="mt-4">
              <LinearProgress variant="determinate" value={progress} />
              <p className="text-xs text-gray-500 mt-1">Uploading... {progress}%</p>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default FileUpload;

const templateData=[
    {
      orderType:"production",
      rawMaterialWarehouse:"Training Warehouse",
      finishedGoodWarehouse:"Training Warehouse",
      deliveryDate: '25-Apr-2025',
      poNumber: '4700064991',
      poDate: '26-Mar-2025',
      soNumber: 'SO/0001/25-26',
      proNumber: 'PROD/0001/25-26',
      customer: 'RMCL',
      itemName: '558510111-A1 CONTROL BOARD-RB100',
      orderQty: 50,
      value: '₹3500',
      total: '₹175000',
    }
  ]