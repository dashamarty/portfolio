import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Daria Sinko",
  description: "Welcome to my graphic design portfolio!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
