// components/ResumeViewer.js
"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker locally
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const resumeUrl = "/assets/files/CV.pdf";

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    setContainerWidth(Math.min(window.innerWidth * 0.9, 800));
    
    const handleResize = () => {
      setContainerWidth(Math.min(window.innerWidth * 0.9, 800));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="shadow-2xl shadow-slate-400/20 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden mb-12 bg-white">
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="h-96 w-[600px] flex items-center justify-center text-slate-400 animate-pulse">
              Loading Resume PDF...
            </div>
          }
          error={
            <div className="h-64 w-[600px] flex items-center justify-center text-red-500">
              Failed to load PDF. Please try downloading it below.
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            width={containerWidth || 600} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-sm"
          />
        </Document>
      </div>

      <a
        href={resumeUrl}
        download="Raynells_CV.pdf"
        className="group relative flex items-center gap-3 px-10 py-4 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-full font-bold text-lg tracking-wide shadow-[0_0_10px_rgba(234,179,8,0.2)] transition-all duration-300 ease-out hover:bg-yellow-500 hover:text-slate-900 hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] hover:-translate-y-1 hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 transition-transform duration-300 group-hover:animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-3.25-3.25m6.5 0L12 12.75m0 0V3" />
        </svg>
        <span>Download CV</span>
      </a>

      {numPages && numPages > 1 && (
        <p className="mt-6 text-sm text-slate-400">
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
}
