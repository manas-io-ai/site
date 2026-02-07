import localFont from 'next/font/local';

export const untitledSans = localFont({
  src: [
    { path: '../../public/fonts/untitled-sans-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/untitled-sans-medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/untitled-sans-bold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const tronicaMono = localFont({
  src: [{ path: '../../public/fonts/tronica-mono-regular.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['monospace'],
});

export const atHaussMono = localFont({
  src: [
    { path: '../../public/fonts/at-hauss-mono-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/at-hauss-mono-medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mono-alt',
  display: 'swap',
  fallback: ['monospace'],
});

export const pixelFont = localFont({
  src: [{ path: '../../public/fonts/pixel-font.woff2', weight: '400', style: 'normal' }],
  variable: '--font-pixel',
  display: 'swap',
  fallback: ['monospace'],
});
