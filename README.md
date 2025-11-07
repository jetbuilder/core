# Professional AI Company Website

A modern, professional website built with Next.js 14, TypeScript, and Tailwind CSS. Designed for AI/API service companies with enterprise-grade features.

## Features

- Modern, responsive design
- Smooth animations with Framer Motion
- Enterprise-grade UI components
- SEO optimized
- Fast performance
- Mobile-first approach

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── sections/          # Page sections
│       ├── header.tsx
│       ├── hero.tsx
│       ├── case-studies.tsx
│       ├── value-props.tsx
│       ├── use-cases.tsx
│       ├── security.tsx
│       ├── resources.tsx
│       └── footer.tsx
├── data/                  # Content data
│   ├── case-studies.ts
│   ├── use-cases.ts
│   └── resources.ts
└── lib/
    └── utils.ts           # Utility functions
```

## Customization

### Brand Colors

Edit `tailwind.config.js` to customize your brand colors:

```javascript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
}
```

### Content

Update the data files in `src/data/` to customize:
- Case studies
- Use cases
- Resources/blog posts

### Company Name

Search and replace "YourCompany" throughout the project with your actual company name.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## Performance

This website is optimized for:
- Fast loading times
- SEO best practices
- Accessibility standards
- Mobile responsiveness

## License

MIT License - feel free to use this for your projects!

## Support

For questions or issues, please open an issue on GitHub.

