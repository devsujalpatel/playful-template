import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playful template | Sujal Patel",
  description:
    "This website is created for learning purpose copied the design from aceternity",
  openGraph: {
    title: "Playful template",
    description:
      "This website is created for learning purpose copied the design from aceternity",
    url: "https://playful.ringui.tech",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.variable} antialiased font-inter bg-neutral-50`}
      >
        <ThemeProvider>
          <Navbar />
          <Container className="bg-neutral-50">{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
