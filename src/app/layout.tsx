import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Restaurante Gourmet | Uma experiência gastronômica única",
  description: "Descubra sabores extraordinários em um ambiente sofisticado e acolhedor. Cardápio exclusivo, vinhos selecionados e momentos inesquecíveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  );
}
