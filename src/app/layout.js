import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

// const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin", "hebrew","latin-ext"] })

export const metadata = {
  title: "Modern Kindergarten Application",
  description: "Develop by Morshed Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

// "Fredoka",sans-serif
