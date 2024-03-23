import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Bookdesc() {
  const [numPages, setNumPages] = useState(null);
  const [preview, setPreview] = useState(false);
  const maxPreviewPages = 10; // Maximum number of pages to display in the preview

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='d-flex container mt-5'>
      <div className='w-50 d-flex'>
        <img src="https://resourceboy.com/wp-content/uploads/2022/08/front-view-of-standing-book-mockup.jpg" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} className='w-75 d-block mx-auto ' alt="no img" />
      </div>
      <div className='w-50 g-1'>
        <h1>hi</h1>
        <h3>hlo</h3>
        <p className="lead">Rating : </p>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore blanditiis, laboriosam animi soluta ipsum quis harum dolores modi sunt cupiditate dolore officia ipsam nesciunt libero totam! Alias quam voluptates totam omnis molestias hic, quo voluptate, voluptas eligendi error id eius recusandae quisquam quod quaerat rem dolor, aliquid consequuntur quis. Sed.</p>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis esse quod sed reprehenderit quasi ipsam eum omnis rerum nisi libero nostrum, dicta neque laboriosam velit possimus perferendis magnam laudantium iusto fuga, cum doloribus, ipsum ad? Ratione rerum laborum excepturi laudantium modi molestias, blanditiis dolore! Reiciendis impedit laudantium repellendus iste.</p>
        <div className="d-flex justify-content-center ">
          <button className="btn btn-success m-4">Buy</button>
          <button className="btn btn-info m-4" onClick={() => setPreview(true)}>Preview</button>
        </div>
        {preview && (
          <div>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }} />
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10000, maxWidth: '80vw', maxHeight: '100vh', overflow: 'auto', backdropFilter: 'blur(5px)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px' }}>
              <Document
                file="/pdfs/Ikigai The Japanese Art for Finding Happiness and the Meaning of Life.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(
                  new Array(Math.min(numPages, maxPreviewPages)),
                  (el, index) => (
                    <div style={{ marginBottom: '20px' }} key={`page_${index + 1}`}>
                      <Page
                        pageNumber={index + 1}
                      />
                    </div>
                  ),
                )}
              </Document>
            </div>
            <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10001 }}>
              <button className='btn btn-danger' onClick={() => setPreview(false)}>Close Preview</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookdesc