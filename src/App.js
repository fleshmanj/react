import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PdfViewer from './components/PDFViewer';

function App() {
    const [file, setFile] = useState('https://static.e-publishing.af.mil/production/1/af_a4/publication/dafi21-101/dafi21-101_dafgm2022-01.pdf');

    function handleFileChange(newFile) {
        setFile(newFile);
    }

    return (
        <div>
            <Navbar onFileChange={handleFileChange} />
            <PdfViewer file={file} />
        </div>
    );
}

export default App;
