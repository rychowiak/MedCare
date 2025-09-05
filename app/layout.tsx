import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { dark } from '@clerk/themes';

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediCare",
  description: "Medical Appointment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${fontSans.variable} antialiased`} >
          <ThemeProvider 
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange>        
            {/* header */}
            <Header/>
            <main className="min-h-screen">
              {children}
            </main>

            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>MedCare</p>
              </div>
            </footer>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
