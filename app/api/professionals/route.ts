import type { NextRequest } from 'next/server';
import { filterProfessionals, specialties } from '@/lib/professionals';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') ?? '';
  const specialty = searchParams.get('specialty') ?? '';

  await new Promise((resolve) => setTimeout(resolve, 400));

  const data = filterProfessionals({ query, specialty });

  return Response.json(
    { data, total: data.length, specialties },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
