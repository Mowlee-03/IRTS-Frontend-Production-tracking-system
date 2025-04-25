import React, { useState, useRef } from 'react';
import { BookOpenTextIcon, ChevronDown, FileSpreadsheet, FileText, } from 'lucide-react';
BookOpenTextIcon
const exportOptions = [
  {
    label: 'Excel',
    value: 'excel',
    icon: <FileSpreadsheet className="w-4 h-4 " />,
  },
  {
    label: 'PDF',
    value: 'pdf',
    icon: <BookOpenTextIcon className="w-4 h-4" />,
  },
];

export default function ExportDropdown({ onExport }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (option) => {
    if (selected?.value === option.value) {
      // Trigger export
      if (onExport) onExport(option.value);
    } else {
      setSelected(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left bg-[#4530FF] rounded-md">
      <div className="inline-flex h-full overflow-hidden">
        <button
          onClick={() => {
            if (selected && onExport) onExport(selected.value);
          }}
          className="flex items-center px-3 py-2 text-white text-md hover:bg-[#3925CC] hover:rounded-l-md min-w-[90px]"
        >
          {selected?.icon && <span className="mr-2">{selected.icon}</span>}
          {selected ? selected.label : 'Export'}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-2 text-white hover:bg-[#3925CC] hover:rounded-r-md"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {exportOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100"
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
