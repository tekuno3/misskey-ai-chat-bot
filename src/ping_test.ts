import { describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';
import app from '@/src/main.ts';

describe('ping test', () => {
  it('should respond with 200', async () => {
    const request = new Request('http://localhost/ping');
    const response = await app.fetch(request);

    expect(response.status).toBe(200);
    expect(await response.json()).toBeTruthy();
  });
});
