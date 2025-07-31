# AdMyBrand Dashboard

A modern, responsive dashboard application built with Next.js 15, React, TypeScript, and Tailwind CSS. Features interactive charts, data tables, mobile optimization, and comprehensive loading states.

![Dashboard Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=AdMyBrand+Dashboard)

## ✨ Features

### 📊 Interactive Analytics
- **Revenue Trends**: Line charts with 30-day comparison and trend analysis
- **Campaign Performance**: Bar charts with dual Y-axes and CTR calculations
- **Traffic Sources**: Donut charts with interactive legends and breakdowns
- **Real-time Metrics**: Animated metric cards with progress indicators

### 📱 Mobile-First Design
- **Responsive Layout**: Single column mobile, grid desktop layout
- **Touch-Friendly UI**: 44px minimum touch targets
- **Hamburger Navigation**: Collapsible mobile menu
- **Horizontal Scrolling**: Charts scroll horizontally on mobile
- **Compact Tables**: Mobile-optimized data table views

### 🚀 Performance & UX
- **Loading Skeletons**: Shimmer animations for all components
- **Error Boundaries**: Graceful error handling with recovery options
- **SSR-Safe**: Hydration-safe responsive components
- **Optimized Builds**: Tree-shaking and code splitting

### 🎨 Modern UI Components
- **shadcn/ui**: Consistent, accessible component library
- **Dark/Light Mode**: System preference with manual toggle
- **Tailwind CSS**: Utility-first styling with custom utilities
- **Lucide Icons**: Beautiful, consistent iconography

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Data Tables**: [react-data-table-component](https://react-data-table-component.netlify.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Development**: [Turbopack](https://turbo.build/pack) for fast builds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sathwik-Shenoy/admybrand.git
   cd admybrand
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🏗 Project Structure

```
admybrand/
├── app/                    # Next.js App Router
│   ├── dashboard/          # Dashboard page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── dashboard/          # Dashboard-specific components
│   └── ui/                 # Reusable UI components
├── contexts/               # React contexts
├── data/                   # Mock data and types
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── types/                  # TypeScript type definitions
└── utils/                  # Helper utilities
```

## 🎯 Key Components

### Dashboard Features
- **LineChart**: Revenue trends with comparison data
- **BarChart**: Campaign performance metrics
- **DonutChart**: Traffic source breakdowns
- **DataTable**: Sortable, filterable campaign data
- **MetricCards**: Animated KPI displays

### Loading States
- **SkeletonCard**: Card component skeletons
- **SkeletonChart**: Chart loading animations
- **SkeletonTable**: Table loading states
- **LoadingProvider**: Global loading state management

### Responsive Design
- **MobileNavigation**: Hamburger menu for mobile
- **useMediaQuery**: SSR-safe responsive hook
- **Responsive breakpoints**: sm (640px), md (768px), lg (1024px)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to [Vercel](https://vercel.com)
2. **Configure environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## ⚡ Performance Optimizations

- **Image Optimization**: WebP/AVIF formats with Next.js Image
- **Bundle Splitting**: Automatic code splitting by Next.js
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JS minification in production
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_APP_NAME=AdMyBrand
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Next.js Configuration

The `next.config.js` includes:
- Performance optimizations
- Security headers
- Image optimization
- Bundle analysis setup

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, email [your-email@domain.com](mailto:your-email@domain.com) or create an issue on GitHub.

---

Built with ❤️ using Next.js and TypeScript
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
