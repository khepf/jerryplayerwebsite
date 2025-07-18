# Jerry Player Website

This is the official website for Jerry Player, a vintage-style music player with a unique cassette tape interface.

## Features

- **React + Vite**: Fast development and modern tooling
- **Vanilla CSS**: Clean, responsive design without external CSS frameworks
- **Vintage Theme**: Retro-styled design matching the Jerry Player aesthetic
- **Demo Video**: Embedded YouTube video showcasing Jerry Player in action
- **User Guide**: Comprehensive documentation for the music player
- **Download Section**: Central place to download the latest version

## Development

### Prerequisites

- Node.js (v16 or later)
- npm

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
JerryPlayerWebsite/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── index.html         # HTML template
├── package.json
└── vite.config.js
```

## Styling

The website uses vanilla CSS with:
- Responsive design principles
- Retro/vintage color scheme matching Jerry Player
- Smooth animations and transitions
- Mobile-first approach

## Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## Content Updates

To update the website content:
1. Edit the components in `src/App.jsx`
2. Update styles in `src/index.css`
3. Add new assets to the `public/` folder

## License

This project is licensed under the ISC License.
