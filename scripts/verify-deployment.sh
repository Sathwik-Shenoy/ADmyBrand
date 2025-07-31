#!/bin/bash

# Deployment Verification Script
# Run this before deploying to production

echo "🚀 AdMyBrand Deployment Verification"
echo "=================================="

# Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node --version)
echo "Node.js: $node_version"

if [[ "$node_version" < "v18" ]]; then
    echo "❌ Node.js 18+ required. Current: $node_version"
    exit 1
fi

echo "✅ Node.js version OK"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --silent

# Type checking
echo "🔍 Type checking..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type checking failed"
    exit 1
fi
echo "✅ Type checking passed"

# Linting
echo "🔍 Linting..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed"
    exit 1
fi
echo "✅ Linting passed"

# Build
echo "🏗️  Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"

# Check environment file
if [ ! -f ".env.example" ]; then
    echo "❌ .env.example not found"
    exit 1
fi
echo "✅ Environment configuration OK"

# Check important files
files=("README.md" "next.config.js" "package.json" "vercel.json")
for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ $file not found"
        exit 1
    fi
done
echo "✅ All required files present"

echo ""
echo "🎉 All checks passed! Ready for deployment"
echo ""
echo "Next steps:"
echo "1. Set up environment variables in your deployment platform"
echo "2. Connect your repository to Vercel or your preferred platform"
echo "3. Deploy!"
echo ""
echo "For Vercel: https://vercel.com/new"
echo "For manual deployment: npm run build && npm run start"
