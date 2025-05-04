import { Hono } from '@hono/hono';

const app = new Hono();
app.get('/ping', (c) => c.json({ text: 'pong!', }));

app.post('/webhook-test', (c) => {
    c.req.json().then(console.log).catch(() => {});

    return c.notFound();
});

export default app;
