import { describe, it, expect } from 'vitest';
import { ensureHttps, isValidUrl } from './helpers';

describe('ensureHttps', () => {
  it('returns url unchanged if starts with http:// or https://', () => {
    expect(ensureHttps('http://example.com')).toBe('http://example.com');
    expect(ensureHttps('https://example.com')).toBe('https://example.com');
  });

  it('prepends https:// if missing protocol', () => {
    expect(ensureHttps('example.com')).toBe('https://example.com');
    expect(ensureHttps('www.example.com')).toBe('https://www.example.com');
  });
});

describe('isValidUrl', () => {
  it('returns true for valid urls', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('example.com')).toBe(true); // because ensureHttps adds https://
  });

  it('returns false for invalid urls', () => {
    expect(isValidUrl('not a url')).toBe(false);
    expect(isValidUrl('')).toBe(false);
  });
});
