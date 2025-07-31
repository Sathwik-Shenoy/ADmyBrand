import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MobileNavigation } from '@/components/ui/mobile-navigation';
import { LoadingProvider } from '@/contexts/LoadingContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AdMyBrand - Dashboard',
  description: 'Modern dashboard application built with Next.js and shadcn/ui',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <div className="relative flex min-h-screen flex-col">
              <MobileNavigation />
              {/* Main content */}
              <main className="flex-1">{children}</main>
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
