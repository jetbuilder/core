# How to View Your Website Locally

## Quick Start

### Step 1: Open Terminal/Command Prompt

Make sure you're in the correct directory:

```bash
cd C:\rnd\agentcore\professional-ai-website
```

### Step 2: Start the Development Server

Run this command:

```bash
npm run dev
```

### Step 3: Wait for Server to Start

You'll see output like this:

```
> professional-ai-website@0.1.0 dev
> next dev

  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.3s
```

### Step 4: Open Your Browser

**Open this URL in your web browser:**

```
http://localhost:3000
```

OR

```
http://127.0.0.1:3000
```

---

## What You'll See

When you open http://localhost:3000, you'll see your complete professional website with:

1. **Header** - Navigation at the top
2. **Hero Section** - Main headline and call-to-action
3. **Case Studies** - Client success stories
4. **Value Props** - Accurate, Secure, Global
5. **Use Cases** - Industry applications
6. **Security** - Compliance badges
7. **Resources** - Blog posts
8. **Footer** - Links and information

---

## Common Issues & Solutions

### Issue: "Port 3000 is already in use"

**Solution**: The server is already running! Just open http://localhost:3000

OR use a different port:
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Issue: "Cannot find module"

**Solution**: Install dependencies first:
```bash
npm install
```

Then run:
```bash
npm run dev
```

### Issue: Terminal shows errors

**Solution**: Make sure you're in the correct directory:
```bash
cd C:\rnd\agentcore\professional-ai-website
npm run dev
```

---

## How to Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

---

## Testing on Other Devices (Same Network)

1. Find your computer's IP address:
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. On another device (phone, tablet), open:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: http://192.168.1.100:3000

---

## Making Changes

The server has **hot reload** - any changes you make to the code will automatically update in the browser!

1. Edit any file in `src/`
2. Save the file
3. The browser will automatically refresh with your changes

---

## Where is Everything?

```
Your Project Location:
C:\rnd\agentcore\professional-ai-website\

View in Browser:
http://localhost:3000

Code Files:
- src/app/page.tsx (main page)
- src/components/sections/ (all sections)
- src/data/ (content you can edit)
```

---

## Next Steps

1. **View your site**: http://localhost:3000
2. **Customize content**: See CUSTOMIZATION.md
3. **Deploy online**: See DEPLOYMENT.md
4. **Need help?**: See README.md

---

## Quick Command Reference

```bash
# Navigate to project
cd C:\rnd\agentcore\professional-ai-website

# Start server
npm run dev

# Stop server
Ctrl + C

# Install dependencies (if needed)
npm install

# Build for production
npm run build

# Run production build
npm start
```

---

**Your website is ready! Open http://localhost:3000 to see it!**

