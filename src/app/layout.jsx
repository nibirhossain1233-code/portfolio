import { Lato } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/common/ScrollToTop";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400","700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Portfolio | Web Developer",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.variable}>{children}
        <ScrollToTop/>
      </body>
    </html>
  );
}