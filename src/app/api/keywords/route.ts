import { NextResponse } from 'next/server';
import { db } from '@/lib/db/schema';
import { keywords, asins } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// 获取某ASIN下所有关键词
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const asin = searchParams.get('asin');
  
  if (!asin) {
    return NextResponse.json({ error: '缺少ASIN参数' }, { status: 400 });
  }

  try {
    const asinRecord = await db.select().from(asins).where(eq(asins.asin, asin)).limit(1);
    if (!asinRecord.length) {
      return NextResponse.json([]);
    }

    const keywordsList = await db
      .select()
      .from(keywords)
      .where(eq(keywords.asinId, asinRecord[0].id));
    
    return NextResponse.json(keywordsList);
  } catch (error) {
    return NextResponse.json({ error: '获取关键词列表失败' }, { status: 500 });
  }
}

// 添加关键词
export async function POST(request: Request) {
  try {
    const { asin, keyword } = await request.json();
    
    const asinRecord = await db.select().from(asins).where(eq(asins.asin, asin)).limit(1);
    if (!asinRecord.length) {
      return NextResponse.json({ error: 'ASIN不存在' }, { status: 400 });
    }

    const result = await db.insert(keywords).values({
      asinId: asinRecord[0].id,
      keyword,
    }).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: '添加关键词失败' }, { status: 500 });
  }
} 