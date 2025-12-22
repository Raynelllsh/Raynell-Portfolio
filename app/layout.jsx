import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Raynell's webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        Global Styles Applied Here:
        - bg-black: Sets the background color to black for all pages.
        - text-white: Sets the default text color to white for all pages.
        - inter.className: Applies the font.
      */}
      <body className={`${inter.className} bg-black text-white`}>
        {/* Navbar Positioned Absolutely on top */}
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>
        
        {children}
      </body>
    </html>
  );
}
