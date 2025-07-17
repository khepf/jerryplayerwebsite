# Jerry Player Website Deployment Guide

This guide will help you deploy the Jerry Player website to various hosting platforms.

## Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager
- Git (for some deployment methods)

## Quick Start

1. **Setup the development environment:**
   ```bash
   # Run the setup script (Windows)
   setup.bat
   
   # Or manually:
   npm install
   npm run dev
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```

## Download Functionality

The website now supports two download options:
- **JerryPlayer.exe** - Direct executable file
- **JerryPlayer.zip** - ZIP archive containing the executable and additional files

### Setting Up Downloads

1. **Prepare your release files:**
   - Build your JerryPlayer.exe from the main project
   - Use the `update-release.bat` script to organize files:
     ```cmd
     update-release.bat v1.0.2
     ```

2. **Upload to web server:**
   - Upload the `releases/` folder to your web server
   - Upload the `download.php` script to your web root
   - Ensure PHP is enabled on your server

3. **Test downloads:**
   - Visit your website and test both download buttons
   - Check that the `downloads.log` file is being created
   - Verify both .exe and .zip files download correctly

## Deployment Options

### 1. Static Hosting (Recommended)

The website is a static React app that can be hosted anywhere:

#### Vercel (Easiest)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

#### Netlify
1. Drag and drop the `dist` folder to Netlify
2. Or connect your Git repository for automatic deployments

#### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### 2. Traditional Web Hosting

For shared hosting or VPS:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload the contents of the `dist` folder to your web server
   - Ensure the web server serves `index.html` for all routes

3. **Configure web server:**
   - For Apache: use the included `.htaccess` file
   - For Nginx: configure try_files directive

### 3. Custom Server Setup

If you need server-side functionality for downloads:

1. **Setup PHP server** (if using download.php):
   - Place `download.php` in your web root
   - Create the `releases` folder structure
   - Upload Jerry Player executables to the releases folder

2. **Configure download links:**
   - Update `DownloadSection.jsx` to point to your server
   - Test the download functionality

## File Structure for Hosting

```
your-website/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── favicon.ico
├── screenshot.jpg
├── vite.svg
├── download.php (optional)
└── releases/ (optional)
    ├── latest/
    │   └── JerryPlayer.exe
    └── v1.0.1/
        └── JerryPlayer.exe
```

## Environment-Specific Configurations

### Development
```bash
npm run dev
```
- Hot reload enabled
- Source maps for debugging
- Development server on localhost:3000

### Production
```bash
npm run build
npm run preview
```
- Optimized bundle
- Minified code
- Production-ready assets

## Custom Domain Setup

1. **Purchase a domain** (e.g., jerryplayer.com)
2. **Configure DNS:**
   - Point A record to your server's IP
   - Or use CNAME for services like Vercel/Netlify
3. **Update base URL** in `vite.config.js` if needed

## SSL Certificate

For production, always use HTTPS:
- Most hosting providers offer free SSL
- For custom servers, use Let's Encrypt
- Ensure all download links use HTTPS

## Performance Optimization

The website is already optimized with:
- Vite bundling and minification
- Responsive images
- Efficient CSS
- Fast loading times

## Monitoring and Analytics

Consider adding:
- Google Analytics for visitor tracking
- Download analytics for the executable
- Error monitoring (e.g., Sentry)
- Performance monitoring

## Content Updates

To update the website content:

1. **Edit components** in `src/components/`
2. **Update styles** in `src/index.css`
3. **Add new releases** to the `releases` folder
4. **Update version numbers** in `DownloadSection.jsx`
5. **Rebuild and redeploy**

## Troubleshooting

### Common Issues:

1. **404 errors on refresh:**
   - Configure web server to serve `index.html` for all routes
   - Check routing configuration

2. **Assets not loading:**
   - Verify base URL configuration
   - Check file paths in the build

3. **Download not working:**
   - Verify file permissions on server
   - Check download script configuration
   - Ensure files exist in releases folder

### Support

For technical issues:
- Check the browser console for errors
- Verify network requests in developer tools
- Test in different browsers
- Check server logs for errors

## Security Considerations

1. **Executable signing:** Sign the JerryPlayer.exe file
2. **HTTPS only:** Never serve downloads over HTTP
3. **Rate limiting:** Implement download rate limiting
4. **Input validation:** Sanitize all user inputs
5. **Regular updates:** Keep dependencies updated

## Backup Strategy

1. **Source code:** Keep in Git repository
2. **Built files:** Regular backups of production files
3. **Release files:** Backup all executable versions
4. **Database:** If using download analytics

## Legal Considerations

1. **Terms of service:** Consider adding terms for downloads
2. **Privacy policy:** If collecting analytics
3. **Copyright:** Ensure proper attribution
4. **License:** Clear licensing for the software

---

## Quick Deployment Checklist

- [ ] Build project successfully
- [ ] Test all functionality locally
- [ ] Upload files to server
- [ ] Configure web server
- [ ] Test website in production
- [ ] Verify download functionality
- [ ] Setup monitoring
- [ ] Configure SSL
- [ ] Test on different devices
- [ ] Update DNS if needed

For additional help, refer to the hosting provider's documentation or the project's README.md file.
