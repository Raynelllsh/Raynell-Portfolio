// app/resume/page.js
"use client";

import dynamic from "next/dynamic";

// Dynamically import the viewer with SSR disabled
const ResumeViewer = dynamic(() => import("@/components/ResumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="h-96 flex items-center justify-center text-slate-400">
      Initializing PDF Viewer...
    </div>
  ),
});

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-40 pb-16 px-4 bg-black text-white">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-4xl font-bold tracking-tight">
          My <span className="text-yellow-500">Resume</span>
        </h2>
        <div className="h-1 flex-1 bg-slate-800 rounded-full"></div>
      </div>

      <ResumeViewer />
    </main>
  );
}

