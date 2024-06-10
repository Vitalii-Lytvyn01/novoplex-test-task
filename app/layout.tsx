import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./lib/provider";
import "./globals.scss";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platinum Play",
  description: "Next level casino experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
