"use client";
import React, { useState } from "react";
import Image from "next/image";

// FIX: Use string path for public assets
const basePath = "/Raynell-Portfolio"; // Must match next.config.mjs

const GIF = `${basePath}/assets/pictures/sending-mail.gif`;

export default function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });
    
    const formData = new FormData(event.target);
    // Note: It's safer to move this key to an Environment Variable in the future
    formData.append("access_key", "eb0f79ee-423a-40bb-b9b9-5f4e9625242f");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      }).then((res) => res.json());

      if (res.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        event.target.reset();
      } else {
        setStatus({
          type: "error",
          message: "Failed to send. Please try again.",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred." });
    }
  };

  return (
    // ADJUSTMENT 1: Reduced 'pt-40' to 'pt-32' to move everything up
    // ADJUSTMENT 1b: Reduced 'pb-12' to 'pb-8' for tighter spacing
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-8 bg-black text-white">
      
      {/* 1. Header Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mb-10 gap-8">
        
        {/* Left Side: Text */}
        <div className="md:w-3/5 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's <span className="text-yellow-500">Connect</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, feel free to drop me a message!
          </p>
          
          {/* Status Messages */}
          {status && (
            <div className={`p-4 rounded-lg text-center font-medium ${
              status.type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-800' :
              status.type === 'error' ? 'bg-red-900/30 text-red-400 border border-red-800' :
              'bg-blue-900/30 text-blue-400 border border-blue-800'
            }`}>
              {status.message}
            </div>
          )}
        </div>

        {/* Right Side: GIF */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
           {/* ADJUSTMENT 2: Made icon smaller (w-40/56 instead of w-64/80) */}
           <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-yellow-500/20 shadow-[0_0_40px_rgba(234,179,8,0.1)]">
             <Image 
               src={GIF} 
               alt="Sending Mail" 
               fill
               className="object-cover"
             />
           </div>
        </div>
      </div>

      {/* 2. Contact Form */}
      <div className="w-full max-w-2xl bg-slate-900/50 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-sm">
        <form onSubmit={onSubmit} className="space-y-6">
          
          {/* ADJUSTMENT 3: Changed grid-cols-2 to grid-cols-1 so Email/Name take full width */}
          <div className="grid grid-cols-1 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-slate-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input - Now Full Width */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-slate-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-black border border-slate-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status?.type === 'loading'}
            className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(234,179,8,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status?.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>
    </main>
  );
}
