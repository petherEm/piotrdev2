import "./globals.css";
import { Inter, Sora } from "next/font/google";

import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";

const inter = Inter({ subsets: ["latin"] });

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "PiotrDev portfolio wesbite",
  description: "PiotrDev portfolio wesbite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`page bg-black text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        {/* <TopLeftImg /> */}
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
