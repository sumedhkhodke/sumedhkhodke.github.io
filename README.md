# Sumedh Khodke Portfolio

This is a personal portfolio website built with React. It was converted from a Jekyll GitHub Pages site to a modern React application.

## Project Structure

```
├── public/               # Static files
│   ├── index.html        # HTML entry point
│   ├── manifest.json     # Web app manifest
│   └── CNAME             # GitHub Pages custom domain
├── src/                  # Source files
│   ├── components/       # Reusable components
│   │   └── Layout.js     # Main layout component
│   ├── pages/            # Page components
│   │   ├── About.js      # About/Home page
│   │   ├── Projects.js   # Projects page
│   │   └── Contact.js    # Contact page
│   ├── styles/           # SCSS styles
│   │   ├── App.scss      # Main styles
│   │   └── Layout.scss   # Layout styles
│   ├── App.js            # Main app component with routing
│   ├── index.js          # React entry point
│   └── index.css         # Base styles
└── package.json          # Project dependencies
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Deploys the app to GitHub Pages.

## Technology Used

- React
- React Router
- SCSS for styling 