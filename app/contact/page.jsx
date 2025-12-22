"use client";

import React, { useState } from "react";
import Image from "next/image";

// FIX: Use string path for public assets
const GIF = "/assets/pictures/sending-mail.gif";

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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Visual Side */}
        <div className="md:w-1/2 bg-blue-50 flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            I'm currently open for new opportunities.
          </p>
          <div className="relative w-64 h-64">
            <Image
              src={GIF}
              alt="Contact Animation"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-8 md:p-12">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status?.type === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status?.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div
                className={`p-4 rounded-lg text-sm text-center ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : status.type === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
