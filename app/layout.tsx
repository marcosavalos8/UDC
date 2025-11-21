import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Universidad de Colima X Protección Civil",
  description: "Portal oficial de la Universidad de Colima en colaboración con Protección Civil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
