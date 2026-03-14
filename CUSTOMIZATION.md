# Customization Guide

## Quick Customization Steps

### 1. Change Company Name

**File: `src/components/sections/header.tsx`**
- Line 28: Change "YourCompany" to your company name

**File: `src/components/sections/footer.tsx`**
- Line 81: Change "YourCompany" to your company name

**File: `src/app/layout.tsx`**
- Line 11: Update the page title

### 2. Update Brand Colors

**File: `tailwind.config.js`**

Replace the color values with your brand colors:

```javascript
colors: {
  primary: {
    // Replace these with your primary brand color shades
    50: '#eff6ff',
    500: '#3b82f6',  // Main primary color
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    // Replace these with your secondary brand color shades
    500: '#22c55e',  // Main secondary color
    600: '#16a34a',
  },
}
```

Use a tool like https://uicolors.app to generate color shades from your brand color.

### 3. Update Hero Section

**File: `src/components/sections/hero.tsx`**

- Line 16-19: Change the main headline
- Line 24-27: Update the subheading
- Line 34: Update "Get Started Free" button text
- Line 38: Update "View Demo" button text
- Line 52: Update trust indicator text

### 4. Update Case Studies

**File: `src/data/case-studies.ts`**

Replace the placeholder data with your real client success stories:

```typescript
{
  id: "1",
  company: "Your Client Name",
  title: "Their success story title",
  description: "What you helped them achieve",
  metric: "Quantified result (e.g., 150% increase)",
}
```

### 5. Update Use Cases

**File: `src/data/use-cases.ts`**

Customize the industry use cases for your specific services:

```typescript
{
  id: "your-use-case",
  title: "Your Use Case Title",
  subtitle: "Brief category",
  description: "Detailed description of this use case",
  icon: "Bot", // Choose from: Bot, Heart, Radio, Headphones, BarChart3, FileText
}
```

### 6. Update Resources/Blog

**File: `src/data/resources.ts`**

Add your actual blog posts or resources:

```typescript
{
  id: "1",
  category: "Category Name",
  title: "Your Article Title",
  description: "Brief description",
  author: "Author Name",
  role: "Author Role",
}
```

### 7. Update Navigation Links

**File: `src/components/sections/header.tsx`**

Lines 9-16: Update the navigation items and their links:

```typescript
const navItems = [
  { label: 'Product', href: '/product' },
  { label: 'Solutions', href: '/solutions' },
  // Add or remove items as needed
]
```

### 8. Update Footer Links

**File: `src/components/sections/footer.tsx`**

Lines 5-47: Customize all footer sections and links to match your site structure.

### 9. Add Your Logo

1. Add your logo image to `public/images/logo.png`
2. Update `src/components/sections/header.tsx`:

```typescript
// Replace line 28 with:
<a href="/" className="flex items-center">
  <img src="/images/logo.png" alt="Your Company" className="h-8" />
</a>
```

### 10. Update Social Media Links

**File: `src/components/sections/footer.tsx`**

Lines 86-113: Update the social media links with your actual profiles:

```typescript
<a
  href="https://twitter.com/yourcompany"
  className="hover:text-white transition-colors"
  aria-label="Twitter"
>
```

### 11. Update Meta Tags for SEO

**File: `src/app/layout.tsx`**

Lines 10-14: Update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Company Name - Your Tagline',
  description: 'Your compelling description for search engines',
  keywords: 'your, relevant, keywords, here',
}
```

### 12. Customize Value Propositions

**File: `src/components/sections/value-props.tsx`**

Lines 7-27: Update the three key value propositions to match your unique selling points.

### 13. Update CTA Buttons

Search for "Get Started" and "Contact Sales" throughout the project and update:
- Button text
- Button links/actions
- Contact information

### 14. Add Contact Form (Optional)

Create a new file `src/components/sections/contact-form.tsx` and add it to your page.

### 15. Add Analytics (Optional)

**Google Analytics:**
1. Get your GA tracking ID
2. Add to `src/app/layout.tsx` in the `<head>` section

**Vercel Analytics:**
- Automatically available after deploying to Vercel
- Enable in Vercel dashboard

## Color Scheme Examples

### Tech/SaaS (Current)
- Primary: Blue (#3b82f6)
- Secondary: Green (#22c55e)

### Healthcare
- Primary: Teal (#14b8a6)
- Secondary: Blue (#3b82f6)

### Finance
- Primary: Navy (#1e40af)
- Secondary: Gold (#f59e0b)

### Creative/Agency
- Primary: Purple (#a855f7)
- Secondary: Pink (#ec4899)

## Typography Customization

**File: `tailwind.config.js`**

Change the font family:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
},
```

Don't forget to import the font in `src/app/layout.tsx`.

## Need Help?

- Check the README.md for general information
- See DEPLOYMENT.md for deployment instructions
- All components are in `src/components/`
- All data files are in `src/data/`

## Pro Tips

1. **Test locally** after each change: `npm run dev`
2. **Use consistent spacing** - follow existing patterns
3. **Keep mobile in mind** - test responsive design
4. **Optimize images** - use Next.js Image component
5. **Update gradually** - test after each major change

---

Happy customizing!

