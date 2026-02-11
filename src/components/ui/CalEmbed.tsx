'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

export function CalEmbedScript() {
  return (
    <Script
      src="https://app.cal.com/embed/embed.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (window.Cal) {
          window.Cal('init', {
            origin: 'https://app.cal.com',
          });
          window.Cal('ui', {
            theme: 'dark',
            styles: { branding: { brandColor: '#EE344A' } },
          });
        }
      }}
    />
  );
}

export function openCalPopup(
  calLink: string,
  prefill: { name: string; email: string; notes: string }
) {
  if (window.Cal) {
    window.Cal('modal', {
      calLink,
      config: {
        layout: 'month_view',
        theme: 'dark',
      },
      prefill: {
        name: prefill.name,
        email: prefill.email,
        notes: prefill.notes,
      },
    });
  }
}
