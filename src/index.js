import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-widgets/styles.css";
import './index.css';
import './css/header.css'
import './css/homepage.css'
import './css/slider.css'
import './css/news.css'
import './css/sidebar.css'
import './css/bizkimiz.css'
import './css/faq.css'
import './css/istirakler.css'
import './css/medya.css'
import './css/kalite.css'
import App from './App';
import "@fontsource/open-sans-condensed";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './css/footer.css';
import './css/sitemap.css';
import './css/urunler.css';
import { HelmetProvider } from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
