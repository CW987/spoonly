import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer/footer";

// Radix

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

// Radix

// Components

import NavBar from "@/components/navbar/navbar";
import AboutSection from "@/components/about/about";

// Components

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spoonly",
  description: "Gotta eat",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Theme
            id="RadixTheme"
            accentColor="jade"
            appearance="light"
            grayColor="mauve"
          >
            {children}
            <AboutSection/>
            <NavBar />
            <Footer />

          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
