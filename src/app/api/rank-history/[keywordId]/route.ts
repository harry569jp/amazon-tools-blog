import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Import db from index.ts
import { rankHistory } from '@/lib/db/schema'; // Import table from schema.ts
import { eq } from 'drizzle-orm';
// ... rest of the file

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