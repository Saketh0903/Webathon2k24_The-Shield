import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Doc() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <button onClick={() => window.open('C:/Users/saket/Downloads/Saketh-Karumudi-Cover-Letter.pdf')}>
        Open PDF
      </button>

      <div style={{ display: 'none' }}>
        <Document
          file="C:/Users/saket/Downloads/Saketh-Karumudi-Cover-Letter.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Doc;