import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function FileRender() {
  const [preview, setPreview] = useState(false);

  return (
    <div>
      <div
        className='w-50 rounded-4'
        style={{
          margin: 'auto',
          marginTop: '100px',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        }}
      >
        <div className='d-flex pt-4'>
          <div className='ps-3'>
            <h2>Harry Potter</h2>
            <p>Author: J.K. Rowling</p>
            <h5>Rating: 4.8</h5>
            <p>
              Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns
              on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical
              powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an
              English boarding school for wizards.
            </p>
          </div>
          <div className='pt-5'>
            <img src='https://thumbs.dreamstime.com/b/open-book-isolated-white-16094903.jpg' width={'300px'} alt='' />
          </div>
        </div>
        <button className='btn btn-warning ms-3 ' onClick={() => setPreview(true)}>
          Start a free trial
        </button>
        <button className='btn btn-dark text-white ms-5'>Purchase</button>
        <p className='ms-3 mt-4 pb-3'>Note: Free trial is valid up to 28 days</p>
      </div>
      {preview && (
        <div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
              backdropFilter: 'blur(5px)',
            }}
            onClick={() => setPreview(false)}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10000,
              maxWidth: '80vw',
              maxHeight: '100vh',
              overflow: 'auto',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '20px',
            }}
          >
            <Document file="/pdfs/Hello.pdf.js">
              {[...Array(10)].map((_, index) => (
                <div key={`page_${index + 1}`} style={{ marginBottom: '20px' }}>
                  <Page pageNumber={index + 1} width={600} />
                  <p style={{ textAlign: 'center' }}>Page {index + 1}</p>
                </div>
              ))}
            </Document>
          </div>
          <button
            className='btn btn-danger'
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10001,
            }}
            onClick={() => setPreview(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default FileRender;
