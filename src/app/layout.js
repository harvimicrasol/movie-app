import { Mulish } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Movie web",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={mulish.className}>
          <Header />
          {children}
          <Footer/>
        </body>
      </html>
    </>
  );
}
