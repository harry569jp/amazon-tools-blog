import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Import db from index.ts
import { keywords, asins } from '@/lib/db/schema'; // Import tables from schema.ts
import { eq, and } from 'drizzle-orm';
// ... rest of the file

// 获取某ASIN下所有关键词
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const asin = searchParams.get('asin');
  
  if (!asin) {
    return NextResponse.json({ error: 'Missing ASIN parameter' }, { status: 400 });
  }

  try {
    const asinRecord = await db.select().from(asins).where(eq(asins.asin, asin)).limit(1);
    if (!asinRecord.length) {
      return NextResponse.json({ error: 'ASIN not found' }, { status: 404 });
    }

    const keywordsList = await db
      .select()
      .from(keywords)
      .where(eq(keywords.asin, asinRecord[0].asin));
    
    return NextResponse.json(keywordsList);
  } catch (error) {
    console.error('Error fetching keywords:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
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
      asin: asinRecord[0].asin,
      keyword,
    }).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json({ error: '添加关键词失败' }, { status: 500 });
  }
} 