import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeDemo } from '@/components/ui/theme-demo';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                AdMyBrand
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern dashboard application built with Next.js 14, TypeScript, and
              shadcn/ui components with full dark mode support.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          {/* Theme Demo */}
          <div className="flex justify-center pt-8">
            <ThemeDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
