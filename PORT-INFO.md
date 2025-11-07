# Your Website Port Information

## Port 3000 is Already in Use

Another service is running on port 3000, so your website is running on a different port.

---

## How to Access Your Website

### Option 1: Use Port 3001 (Recommended)

**Open this URL in your browser:**
```
http://localhost:3001
```

To start on port 3001, use:
```bash
npm run dev -- -p 3001
```

---

### Option 2: Use Port 3002

**URL:**
```
http://localhost:3002
```

To start on port 3002, use:
```bash
npm run dev -- -p 3002
```

---

### Option 3: Stop the Other Service

If you want to use port 3000:

1. **Find what's using port 3000:**
   ```bash
   netstat -ano | findstr :3000
   ```

2. **Stop the process:**
   - Look at the PID number (last column)
   - Open Task Manager
   - Find the process by PID
   - End the process

3. **Then start your website:**
   ```bash
   npm run dev
   ```
   It will use port 3000

---

## Currently Running

Based on your system:
- **Port 3000**: Another service (Process ID: 7840)
- **Your Website**: Starting on port 3001

---

## Quick Start Commands

```bash
# Navigate to your project
cd C:\rnd\agentcore\professional-ai-website

# Start on port 3001
npm run dev -- -p 3001

# Start on port 3002
npm run dev -- -p 3002

# Start on port 4000
npm run dev -- -p 4000
```

---

## After Starting the Server

You'll see output like:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3001
✓ Ready in 2.3s
```

**Open the URL shown in your browser!**

---

## Summary

**Your website URL:** http://localhost:3001

Just open this in your web browser to see your professional AI company website!

