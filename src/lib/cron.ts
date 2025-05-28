import { db } from './db/schema';
import { keywords, rankHistory } from './db/schema';
import { sendEmail } from './email';

// 模拟获取关键词排名的函数
async function getKeywordRank(keyword: string, asin: string): Promise<number> {
  // 这里实现实际的排名获取逻辑
  return Math.floor(Math.random() * 100);
}

// 检查关键词排名变化并发送邮件通知
export async function checkKeywordRanks() {
  try {
    const allKeywords = await db.select().from(keywords);
    
    for (const keyword of allKeywords) {
      const rank = await getKeywordRank(keyword.keyword, keyword.asinId.toString());
      
      // 记录排名
      await db.insert(rankHistory).values({
        keywordId: keyword.id,
        rank,
      });

      // 获取最近的两次排名记录
      const recentRanks = await db
        .select()
        .from(rankHistory)
        .where(eq(rankHistory.keywordId, keyword.id))
        .orderBy(rankHistory.date)
        .limit(2);

      // 如果排名变化超过阈值，发送邮件通知
      if (recentRanks.length === 2) {
        const rankChange = recentRanks[1].rank - recentRanks[0].rank;
        if (Math.abs(rankChange) > 10) {
          await sendEmail(
            '关键词排名变化提醒',
            `关键词 "${keyword.keyword}" 的排名变化: ${rankChange}`,
            ['your-email@example.com'],
            'your-email@gmail.com',
            'your-app-password'
          );
        }
      }
    }
  } catch (error) {
    console.error('检查关键词排名失败:', error);
  }
} 