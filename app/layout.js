import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopContactBar from "./components/topcontactbar";
import Header from "./components/header";
import Footer from "./components/footer";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Forest Hills Resort Udaipur",
  description: "TheForest Hills Resort Udaipur is a beautiful resort located in Udaipur, Rajasthan. It is a perfect place for a family vacation or a romantic getaway.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <TopContactBar/ >
        <Header/ >
      {children}
      <Footer/ >
      </body>
    </html>
  );
}
