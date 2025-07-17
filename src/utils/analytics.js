// Google Analytics utility functions

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-X5M6REWCFV', {
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
  // Track the download event (this will automatically be a conversion if set up in GA4)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'JerryPlayer',
      event_label: fileName,
      file_name: fileName,
      file_type: downloadType,
      value: 1
    });
    
    // Also send a purchase/conversion event for better tracking
    window.gtag('event', 'purchase', {
      transaction_id: `download_${Date.now()}`,
      value: 0, // Free download
      currency: 'USD',
      items: [{
        item_id: 'jerryplayer',
        item_name: 'Jerry Player',
        item_category: 'Software',
        item_variant: downloadType,
        quantity: 1,
        price: 0
      }]
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
