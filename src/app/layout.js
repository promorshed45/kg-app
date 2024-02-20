import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import NavBar from "@/components/frontend/shared/NavBar";
import Footer from "@/components/frontend/shared/Footer";

// const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin", "hebrew","latin-ext"], weight: ['300', '400','600','700']});

export const metadata = {
  title: "Modern Kindergarten Application",
  description: "Develop by Morshed Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Provider>
          <NavBar/>
          <main>{children}</main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}

// "Fredoka",sans-serif
