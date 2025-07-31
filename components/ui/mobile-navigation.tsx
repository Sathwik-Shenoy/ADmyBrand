'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center px-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden mr-2 p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <div className="flex-1">
            <span className="font-bold text-lg">AdMyBrand</span>
          </div>

          {/* Theme toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border/40 md:hidden">
            <nav className="container px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="/dashboard" 
                    className="block py-3 px-4 rounded-lg bg-muted/50 font-medium text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a 
                    href="/campaigns" 
                    className="block py-3 px-4 rounded-lg font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Campaigns
                  </a>
                </li>
                <li>
                  <a 
                    href="/analytics" 
                    className="block py-3 px-4 rounded-lg font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a 
                    href="/settings" 
                    className="block py-3 px-4 rounded-lg font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
