import { test, expect } from '@playwright/test';

const API = 'https://jsonplaceholder.typicode.com';

test.describe('Posts API', () => {
  test('GET returns the requested post', async ({ request }) => {
    const response = await request.get(`${API}/posts/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');
  });

  test('POST creates a post', async ({ request }) => {
    const response = await request.post(`${API}/posts`, {
      data: { title: 'qa post', body: 'created by Playwright', userId: 1 },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('qa post');
    expect(body.id).toBeDefined();
  });

  test('PUT updates a post', async ({ request }) => {
    const response = await request.put(`${API}/posts/1`, {
      data: { id: 1, title: 'updated title', body: 'updated body', userId: 1 },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('updated title');
  });

  test('DELETE removes a post', async ({ request }) => {
    const response = await request.delete(`${API}/posts/1`);
    expect(response.status()).toBe(200);
  });
});