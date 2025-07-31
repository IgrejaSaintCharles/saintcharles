declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const initFacebookPixel = () => {
  if (window.fbq) return;

  const fbq = function (...args: any[]) {
    (fbq as any).callMethod
      ? (fbq as any).callMethod(...args)
      : (fbq as any).queue.push(args);
  };

  (fbq as any).push = (fbq as any);
  (fbq as any).loaded = true;
  (fbq as any).version = '2.0';
  (fbq as any).queue = [];

  window.fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';

  const firstScript = document.getElementsByTagName('script')[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);

  window.fbq('init', '1299418058437952');
  window.fbq('track', 'PageView');
};
