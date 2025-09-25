export const ensureHttps = (url: string): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

export const isValidUrl = (url: string): boolean => {
  try {
    const fullUrl = ensureHttps(url);
    new URL(fullUrl);
    return true;
  } catch {
    return false;
  }
};
