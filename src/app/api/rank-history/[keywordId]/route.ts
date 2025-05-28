import { NextResponse } from 'next/server';
import { db } from '@/lib/db/schema';
import { rankHistory } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: Request,
  { params }: { params: { keywordId: string } }
) {
  try {
    const keywordId = parseInt(params.keywordId);
    if (isNaN(keywordId)) {
      return NextResponse.json({ error: '无效的关键词ID' }, { status: 400 });
    }

    const history = await db
      .select()
      .from(rankHistory)
      .where(eq(rankHistory.keywordId, keywordId))
      .orderBy(rankHistory.date);

    return NextResponse.json(history);
  } catch (error) {
    return NextResponse.json({ error: '获取排名历史失败' }, { status: 500 });
  }
} 