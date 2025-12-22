"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker (Standard for Next.js + React-PDF)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// --- Configuration ---
const resumeUrl = "/assets/files/Raynell's_CV.pdf"; 

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(null);

  // Handle responsive width for the PDF
  useEffect(() => {
    // Initial width set
    setContainerWidth(Math.min(window.innerWidth * 0.9, 800));
    
    // Update on resize
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
    // FIX: 'pt-40' adds 10rem (160px) of space at the top so the Navbar doesn't cover content
    <main className="min-h-screen flex flex-col items-center pt-40 pb-16 px-4 bg-slate-50 dark:bg-slate-950">
      
      {/* 1. Header Section */}
      <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-10 tracking-tight">
        My Resume
      </h1>

      {/* 2. PDF Viewer Container */}
      <div className="shadow-2xl shadow-slate-400/20 dark:shadow-black/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden mb-12 bg-white">
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center bg-white"
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

      {/* 3. Download Button (Neon Yellow Style) */}
      <a
        href={resumeUrl}
        download="Raynell's_CV.pdf"
        className="
          group
          relative
          flex items-center gap-3
          px-10 py-4
          
          /* Colors & Border */
          bg-transparent
          text-yellow-500
          border-2 border-yellow-500
          
          /* Shape */
          rounded-full
          font-bold text-lg
          tracking-wide
          
          /* Glow Effects */
          shadow-[0_0_10px_rgba(234,179,8,0.2)]
          
          /* Transitions */
          transition-all duration-300 ease-out
          
          /* Hover State */
          hover:bg-yellow-500 
          hover:text-slate-900 
          hover:shadow-[0_0_30px_rgba(234,179,8,0.6)]
          hover:-translate-y-1 
          hover:scale-105
        "
      >
        {/* Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-6 h-6 transition-transform duration-300 group-hover:animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-3.25-3.25m6.5 0L12 12.75m0 0V3" />
        </svg>
        
        <span>Download CV</span>
      </a>

      {/* Optional Page Counter */}
      {numPages > 1 && (
        <p className="mt-6 text-sm text-slate-400">
          Page {pageNumber} of {numPages}
        </p>
      )}

    </main>
  );
}
