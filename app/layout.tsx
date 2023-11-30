"use client";
import BgText from "@/components/BgText";
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
            <BgText />
            <div className="max-w-screen-2xl p-4 md:p-6 2xl:p-10 pr-0">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
