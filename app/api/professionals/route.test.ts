/**
 * @jest-environment node
 */
import type { NextRequest } from 'next/server';
import { GET } from './route';

describe('GET /api/professionals', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const callRoute = (search = '') => {
    const request = new Request(
      `http://localhost/api/professionals${search}`,
    ) as NextRequest;
    const responsePromise = GET(request);
    jest.advanceTimersByTime(400);
    return responsePromise;
  };

  it('returns the list of professionals and specialties', async () => {
    const response = await callRoute();
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.data.length).toBeGreaterThan(0);
    expect(json.specialties.length).toBeGreaterThan(0);
    expect(json.total).toBe(json.data.length);
  });

  it('filters professionals by search text', async () => {
    const response = await callRoute('?q=Marina');
    const json = await response.json();

    expect(json.data).toHaveLength(1);
    expect(json.data[0].name).toBe('Dra. Marina Alves');
  });

  it('filters professionals by specialty', async () => {
    const response = await callRoute('?specialty=Psiquiatria');
    const json = await response.json();

    expect(json.data.length).toBeGreaterThan(0);
    expect(
      json.data.every(
        (professional: { specialty: string }) =>
          professional.specialty === 'Psiquiatria',
      ),
    ).toBe(true);
  });

  it('does not cache the response', async () => {
    const response = await callRoute();

    expect(response.headers.get('Cache-Control')).toBe('no-store');
  });
});
