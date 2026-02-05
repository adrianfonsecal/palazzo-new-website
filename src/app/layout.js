import { Playfair_Display_SC, Montserrat, Great_Vibes } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair-sc",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata = {
  title: "Palazzo Invites | Experiencias Digitales Premium para Bodas",
  description: "Palazzo Invites Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      </head>
      <body
        className={`${playfairSC.variable} ${montserrat.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
        <GoogleTagManager gtmId="G-GTNW9NNKCK" />
      </body>
    </html>
  );
}
