import React, { useEffect, useState } from 'react';

function PdfViewer(props) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        if (props.file.includes('github')) {
          const response = await fetch(props.file);
          const arrayBuffer = await response.arrayBuffer();
          const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        } else {
          setPdfUrl(props.file);
        }
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, [props.file]);

  return (
    <div>
      <iframe src={pdfUrl} title="PDF Viewer" width="100%" height="600px" />
    </div>
  );
}

export default PdfViewer;
