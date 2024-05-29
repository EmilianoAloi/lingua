import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Lingua - Casa de idiomas",
  description: "Casa de idiomas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
