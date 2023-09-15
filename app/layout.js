import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J & R Insurance",
  description: "J & R Insurance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> {children} </body>{" "}
    </html>
  );
}
