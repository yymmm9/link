import type React from "react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const metadata: Metadata = {
  title: {
    template: "%s | Hov",
    default: "Hov",
  },
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(
        "min-h-screen bg-background font-sans antialiased overflow-y-scroll",
        GeistSans.variable
        // GeistMono.variable
      )}
      suppressHydrationWarning
    >
      {/* <Head metadata={metadata} /> */}
      <body className="w-full">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Header />
              {children}
              <Footer />
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
