import type { Metadata } from "next";
import "./globals.css";
import App from "./app";

export const metadata: Metadata = {
  title: "Conecta Vida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-screen flex flex-col text-blue-900 "}>
        <App>{children}</App>
      </body>
    </html>
  );
}
