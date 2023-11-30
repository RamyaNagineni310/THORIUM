"use client";
import Navbar from "@/components/Navbar";
import "./globals.scss";
import "./styles.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen overflow-hidden">
          <Navbar />
          <main className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden pt-4">
            <div className="max-w-screen-2xl py-4 md:py-6 2xl:py-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
