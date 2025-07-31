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
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AdMyBrand
              </span>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border/40 md:hidden shadow-2xl">
            <nav className="container px-4 py-6">
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/dashboard" 
                    className="group block py-4 px-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-medium text-foreground hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all duration-300 border border-blue-200/50 dark:border-blue-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>Dashboard</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="/campaigns" 
                    className="group block py-4 px-6 rounded-xl font-medium text-muted-foreground hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 hover:text-foreground transition-all duration-300 hover:border hover:border-purple-200/50 dark:hover:border-purple-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>Campaigns</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="/analytics" 
                    className="group block py-4 px-6 rounded-xl font-medium text-muted-foreground hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-950/30 dark:hover:to-emerald-950/30 hover:text-foreground transition-all duration-300 hover:border hover:border-green-200/50 dark:hover:border-green-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>Analytics</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="/settings" 
                    className="group block py-4 px-6 rounded-xl font-medium text-muted-foreground hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-950/30 dark:hover:to-amber-950/30 hover:text-foreground transition-all duration-300 hover:border hover:border-orange-200/50 dark:hover:border-orange-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-orange-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span>Settings</span>
                    </div>
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
