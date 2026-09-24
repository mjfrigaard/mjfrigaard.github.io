import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Harris Temuri",
  description: "Homepage of Harris Temuri's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gridGap = "gap-2 md:gap-4";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <GravityStarsBackground
            className={`inset-0 h-screen flex items-center justify-center rounded-xl bg-[#090b10] z-2`}
            starsCount={70}
          />
          {/* <div className="bg-[#0d1017] h-screen max-h-screen overflow-hidden z-2" /> */}
          <div className="flex h-screen max-h-screen w-screen justify-center items-center absolute top-0 left-0">
            <main className="h-full lg:max-h-3/4 xl:max-h-7/12 w-screen max-w-7xl p-1.5 md:py-8 md:px-10">
              <div
                className={cn(
                  "flex flex-col md:grid md:grid-rows-10 h-full",
                  gridGap,
                )}
              >
                <NavBar className="md:row-span-1 py-1 z-3 opacity-90" />
                <div
                  className={cn(
                    "flex flex-col md:grid row-span-9 md:grid-cols-10 h-full overflow-hidden",
                    gridGap,
                  )}
                >
                  <SideBar className="py-4 md:col-span-2 md:row-span-full z-3 overflow-hidden md:h-full opacity-90" />
                  <div className="h-full md:col-span-8 md:row-span-full z-3 overflow-y-auto bg-[#0d1017] opacity-90 border border-gray-500 hover:border-teal-300">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
