import { saveAs } from 'file-saver';
import { DownloadCloud } from 'lucide-react';
import * as XLSX from 'xlsx';

const ExcelTemplateGenerator = ({ name, templateData }) => {
  const generateTemplate = () => {
    // Convert JSON data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(templateData);

    // Create a workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${name}`);

    // Generate buffer
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // Create a Blob and trigger download
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${name}.xlsx`);
  };

  return (
    <button 
      onClick={generateTemplate}
      className="bg-none border-2 text-sm text-gray-400 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-gray-200
       absolute top-5 left-2"
    >
      <DownloadCloud size={18}/>{name}
    </button>
  );
};

export default ExcelTemplateGenerator;
