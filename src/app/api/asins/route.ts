import { NextResponse } from 'next/server';
import { db } from '@/lib/db/schema';
import { asins } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const allAsins = await db.select().from(asins);
    return NextResponse.json(allAsins);
  } catch (error) {
    return NextResponse.json({ error: '获取ASIN列表失败' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { asin, note } = await request.json();
    const result = await db.insert(asins).values({
      asin,
      note,
    }).returning();
    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: '添加ASIN失败' }, { status: 500 });
  }
} 