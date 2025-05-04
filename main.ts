import { Hono } from '@hono/hono';

const app = new Hono();
app.get('/ping', (c) => c.json({ text: 'pong!', }));

export default app;
