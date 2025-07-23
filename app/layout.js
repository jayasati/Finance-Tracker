import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finance Tracker",
  description: "Track your finances with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Header/>
          <main className="min-h-screen pt-16">
            {children}
          </main>
          
          <footer className="bg-blue-50 text-white p-4 flex justify-center items-center">
            <div className="container mx-auto px-4 text-center text-gray-700">
              <p className="">made with love by Jay Asati</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}