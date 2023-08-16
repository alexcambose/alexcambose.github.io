export const prefersDarkMode = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches;
export const watchPrefersDarkMode = (callback: (prefersDarkMode: boolean) => void) => {
  const mediaCallback = (event: MediaQueryList) => {
    const isDark = event.matches;
    callback(isDark);
  };
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  // @ts-ignore
  media.addEventListener('change', mediaCallback);
  return () => {
    // @ts-ignore
    media.removeEventListener('change', mediaCallback);
  };
};
