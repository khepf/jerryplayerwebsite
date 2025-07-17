// Google Analytics utility functions

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track download events specifically for your Jerry Player downloads
export const trackDownload = (fileName, downloadType = 'exe') => {
  trackEvent('download', 'JerryPlayer', fileName, 1);
  
  // Also track as a conversion if you set up goals in GA
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'GA_MEASUREMENT_ID/CONVERSION_ID', // Replace with your conversion ID
      event_category: 'download',
      event_label: fileName,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
  trackEvent('click', 'button', `${section}_${buttonName}`, 1);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};
