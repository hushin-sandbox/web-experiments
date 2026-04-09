import { describe, expect, it } from 'vite-plus/test';
import app from './index';

describe('GET /api', () => {
  it('returns name: Cloudflare', async () => {
    const res = await app.request('/api');
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ name: 'Cloudflare' });
  });

  it('returns Content-Type: application/json', async () => {
    const res = await app.request('/api');
    expect(res.headers.get('Content-Type')).toMatch(/application\/json/);
  });
});

describe('unknown routes', () => {
  it('returns 404 for unknown paths', async () => {
    const res = await app.request('/unknown');
    expect(res.status).toBe(404);
  });
});
