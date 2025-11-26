# Open Graph Setup Guide

## ✅ Completed Open Graph Tags

Your `index.html` now includes all required Open Graph tags:

- `og:title` - Page title for social media
- `og:description` - Description for social media
- `og:type` - Content type (website)
- `og:url` - Canonical URL
- `og:site_name` - Site name
- `og:image` - Social media image (currently using SVG placeholder)
- `og:image:width` & `og:image:height` - Image dimensions
- `og:image:alt` - Alt text for image
- `og:locale` - Content language (German)

Plus Twitter Card tags for better Twitter sharing.

## 🎨 Next Steps: Create a Proper OG Image

### Current Setup
- Uses `og-image.svg` as placeholder
- Dimensions: 1200x630px (optimal for social media)

### To Create a Professional OG Image:

1. **Use the HTML Template**: Open `public/images/og-image-template.html` in your browser
2. **Screenshot it** (1200x630px) and save as `og-image.jpg`
3. **Or use design tools** like Canva, Figma, or Photoshop to create a custom image
4. **Replace the SVG reference** in `index.html` with the JPG file

### Recommended OG Image Content:
- Your logo/brand name prominently displayed
- Brief tagline or value proposition
- Brand colors and professional look
- Website URL at bottom
- 1200x630px dimensions
- JPG format (smaller file size than PNG)

### File Location:
- Save as: `public/images/og-image.jpg`
- Update HTML: Change `.svg` to `.jpg` in the meta tags

## 🧪 Testing Your Open Graph Tags

Test your Open Graph implementation:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Preview**: https://www.linkedin.com/post-inspector/
4. **Open Graph Checker**: https://opengraph.xyz/

## 📱 Dynamic OG Tags for Other Pages

For individual service pages, blog posts, etc., you'll want dynamic OG tags. Consider using:

- `react-helmet` or `react-head` for React components
- Server-side rendering with dynamic meta tags
- Or create separate HTML files for important pages

## 🔍 SEO Benefits

Complete Open Graph tags will:
- Make your links look professional on social media
- Increase click-through rates from social shares
- Improve brand consistency across platforms
- Help with social media marketing efforts