# How to Deploy Your New Portfolio to anikethpaul.com

## Option 1: Deploy to Vercel (Recommended)

1. **Download the code** from v0 using the "Download Code" button
2. **Push to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "New portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   \`\`\`

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project
   - Click "Deploy"

4. **Add Custom Domain:**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Add `anikethpaul.com` and `www.anikethpaul.com`
   - Update your domain's DNS settings to point to Vercel:
     - Add A record: `@` → `76.76.19.61`
     - Add CNAME record: `www` → `cname.vercel-dns.com`

## Option 2: Deploy to Netlify

1. **Download and push code to GitHub** (same as above)
2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings: 
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

3. **Add Custom Domain:**
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain `anikethpaul.com`
   - Update DNS settings as instructed

## Option 3: Replace Current Static Files

If your current site is hosted as static files:

1. **Build the static version:**
   \`\`\`bash
   npm run build
   npm run export
   \`\`\`

2. **Upload the `out` folder contents** to your current hosting provider
3. **Replace all existing files** with the new ones

## DNS Configuration

For any hosting provider, update your domain DNS:
- **A Record:** `@` points to your hosting provider's IP
- **CNAME Record:** `www` points to your hosting provider's domain
- **TTL:** Set to 300 (5 minutes) for faster propagation

## Environment Variables (if needed)

If you add any API integrations later, set these in your hosting platform:
- `NEXT_PUBLIC_SITE_URL=https://anikethpaul.com`

Your new site will be live at anikethpaul.com within 24-48 hours after DNS propagation!
