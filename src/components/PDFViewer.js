import React, { useState, useEffect } from 'react';

function PdfViewer(props) {
    const [filePath, setFilePath] = useState(props.file);
    const [error, setError] = useState(null);

    function onDocumentLoadError(error) {
        try {
            // Silently ignore the error
        } catch (error) {
            console.error(error);
        }
    }

    function onIframeLoad() {
        try {
            const iframe = document.getElementById('pdfViewer');
            iframe.style.height = `${window.innerHeight}px`;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setFilePath(props.file);
        setError(null);
    }, [props.file]);

    if (error) {
        return <div>Failed to load PDF: {error.message}</div>;
    }

    return (
        <div style={{ height: '600px' }}>
            <iframe id="pdfViewer" src={filePath} onLoad={onIframeLoad} style={{ width: '100%', border: 'none' }}></iframe>
        </div>
    );
}

export default PdfViewer;
