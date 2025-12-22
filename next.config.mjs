/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== Enables static exports
  images: {
    unoptimized: true, // <=== Required for GitHub Pages
  },
  // If your repo is NOT at the root (e.g., username.github.io/repo-name),
  // you must add the basePath below.
   basePath: "/Raynell-Portfolio", 
};

export default nextConfig;
