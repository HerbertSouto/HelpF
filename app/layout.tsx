import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariane Carvalho — Product Owner · Processos · Governança de Risco",
  description:
    "Especialista com 12 anos de experiência em Produto, Engenharia de Processos e Governança de Risco. Transformo operações complexas em sistemas eficientes, seguros e orientados a dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geistSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
