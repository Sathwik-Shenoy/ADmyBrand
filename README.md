# AdMyBrand - Modern Analytics Dashboard

A comprehensive, r4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
admybrand/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── dashboard/         # Dashboard-specific components
│   ├── ui/               # Reusable UI components
│   └── ThemeProvider.tsx  # Theme context
├── contexts/              # React contexts
│   └── LoadingContext.tsx # Loading state management
├── data/                  # Mock data
│   └── mockData.ts        # Sample dashboard data
├── hooks/                 # Custom React hooks
│   └── useMediaQuery.ts   # Responsive hook
├── lib/                   # Utility libraries
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript definitions
│   └── index.ts          # Type definitions
└── utils/                 # Utility functions
    └── performance.ts     # Performance monitoring
```

## 🎯 Key Components

### Dashboard Components
- **LineChart**: Revenue trend visualization
- **BarChart**: Campaign performance metrics
- **DonutChart**: Traffic source breakdown
- **DataTable**: Sortable, filterable campaign data
- **MetricCard**: Animated metric cards with progress indicators

### UI Components
- **SkeletonCard/Chart/Table**: Loading skeleton components
- **ErrorBoundary**: Error handling wrapper
- **MobileNavigation**: Responsive navigation menu

### Contexts
- **LoadingContext**: Global loading state management
- **ThemeProvider**: Dark/light theme switching

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📱 Responsive Design

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm-lg)  
- **Desktop**: > 1024px (lg+)

## 🚀 Performance Features

- **SSR Safe**: Proper hydration handling
- **Loading States**: Comprehensive skeleton screens
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA labels and screen reader support

---

**Made with ❤️ by [Sathwik Shenoy](https://github.com/Sathwik-Shenoy)**ve analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features real-time data visualization, mobile-first design, and advanced loading states.

## 🚀 Features

### 📊 Analytics & Visualization
- **Interactive Charts**: Line charts, bar charts, and donut charts using Recharts
- **Real-time Data**: Mock data simulation with refresh functionality
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Data Export**: CSV export functionality for campaign data

### 🎨 UI/UX
- **Modern Design**: Clean, professional interface with shadcn/ui components
- **Dark/Light Theme**: System-aware theme switching
- **Loading States**: Comprehensive skeleton screens with shimmer animations
- **Error Boundaries**: Graceful error handling with fallback UI
- **Accessibility**: ARIA labels, screen reader support, keyboard navigation

### 📱 Mobile Optimization
- **Single Column Layout**: Optimized for mobile viewing
- **Hamburger Navigation**: Touch-friendly navigation menu
- **Scrollable Charts**: Horizontal scroll for better mobile chart viewing
- **Compact Data Tables**: Mobile-specific table layouts
- **Touch-Friendly**: 44px minimum touch targets

### ⚡ Performance
- **SSR Safe**: No hydration mismatches
- **Optimized Loading**: 1.5s initial loading simulation
- **Lazy Loading**: Code splitting and dynamic imports
- **Performance Monitoring**: Development-only render time tracking

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Turbopack](https://turbo.build/pack)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sathwik-Shenoy/admybrand.git
   cd admybrand
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```
- 🔧 **ESLint & Prettier** configured
- 📱 **Responsive design**
- 🚀 **Turbopack** for fast development

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## Project Structure

```
├── app/
│   ├── dashboard/           # Dashboard pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── dashboard/          # Dashboard-specific components
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── data/
    └── mockData.ts        # Mock data for development
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Linting:** ESLint
- **Formatting:** Prettier
- **Fonts:** Geist (optimized with next/font)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
