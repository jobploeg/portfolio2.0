import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Job van der Ploeg - Web developer",
  description: "Portfolio van Job van der Ploeg, Front-end web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body className={` text-black ${montserrat.className}`}>
        <div class="background">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {children}
      </body>
    </html>
  );
}
