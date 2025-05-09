import * as XLSX from 'xlsx';

/**
 * Parse Excel/CSV file and validate headers.
 * 
 * @param {File} file - Uploaded file
 * @param {Array<Object>} templateData - Template used to validate headers (e.g., [{ Name: "", Age: "" }])
 * @returns {Promise<Array<Object>>} - Parsed data if valid
 * @throws {Error} - If file is invalid or headers don't match
 */
export const parseExcelData = (file, templateData) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Extract actual and expected headers
        const actualHeaders = jsonData.length > 0 ? Object.keys(jsonData[0]) : [];
        const expectedHeaders = Object.keys(templateData[0]);

        const isMatch = actualHeaders.length === expectedHeaders.length &&
          actualHeaders.every((key, idx) => key.trim() === expectedHeaders[idx].trim());

        if (!isMatch) {
          return reject(
            new Error(
              `Header mismatch. Expected: [${expectedHeaders.join(', ')}], Got: [${actualHeaders.join(', ')}]`
            )
          );
        }

        return resolve(jsonData);
      } catch (err) {
        return reject(new Error('Failed to parse the file.'));
      }
    };

    reader.onerror = () => {
      return reject(new Error('Error reading the file.'));
    };

    reader.readAsArrayBuffer(file);
  });
};
