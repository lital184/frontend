import React from 'react';

const convertToCSV = (data) => {
  const csvArray = [];
  const headers = Object.keys(data[0]);

  csvArray.push(headers.join(','));

  data.forEach((item) => {
    const values = Object.values(item);
    csvArray.push(values.join(','));
  });

  return csvArray.join('\n');
};

const DownloadCSVButton = ({ data, fileName }) => {
  const handleDownload = () => {
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>Download CSV</button>
  );
};

export default DownloadCSVButton;
