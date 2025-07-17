// Alternative Google Analytics setup using react-ga4
import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('GA_MEASUREMENT_ID'); // Replace with your actual GA4 Measurement ID
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Track events
export const trackEvent = (action, category, label, value) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value,
  });
};

// Track downloads
export const trackDownload = (fileName, downloadType) => {
  ReactGA.event({
    action: 'download',
    category: 'JerryPlayer',
    label: fileName,
    value: 1,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
  ReactGA.event({
    action: 'click',
    category: 'button',
    label: `${section}_${buttonName}`,
    value: 1,
  });
};
