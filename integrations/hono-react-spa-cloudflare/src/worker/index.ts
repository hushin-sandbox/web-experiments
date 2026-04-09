import { Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

const routes = app.get('/api', (c) => c.json({ name: 'Cloudflare' }));

export default app;
export type AppType = typeof routes;
