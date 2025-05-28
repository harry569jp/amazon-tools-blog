import { pgTable, serial, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

// 用户表
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// 博客文章表
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  authorId: integer('author_id').references(() => users.id),
  published: boolean('published').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// 关键词表
export const keywords = pgTable('keywords', {
  id: serial('id').primaryKey(),
  asin: text('asin').notNull(),
  keyword: text('keyword').notNull(),
  rank: integer('rank'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// 排名历史表
export const rankHistory = pgTable('rank_history', {
  id: serial('id').primaryKey(),
  keywordId: integer('keyword_id').references(() => keywords.id),
  rank: integer('rank').notNull(),
  date: timestamp('date').defaultNow(),
});

// 添加ASIN表定义
export const asins = pgTable('asins', {
  id: serial('id').primaryKey(),
  asin: text('asin').notNull().unique(), // ASIN字段，非空且唯一
  note: text('note'), // 备注字段，可选
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}); 