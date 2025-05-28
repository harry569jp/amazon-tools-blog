# Amazon Tools Blog

## 项目历史记录

### 2024-03-28

#### 部署配置
- 配置 Vercel 部署
- 设置环境变量
- 配置托管数据库（Supabase）连接

#### 数据库配置
- 添加了 PostgreSQL 数据库配置
- 创建了数据库表结构：
  - users（用户表）
  - posts（博客文章表）
  - keywords（关键词表）
  - rank_history（排名历史表）
  - asins（ASIN表）
- 使用托管数据库服务 (Supabase) 代替本地 pgAdmin 4 数据库

#### 依赖安装
1. `src/lib/db/schema.ts`
   - 添加了数据库表定义
   - 配置了数据库连接池
   - 导出了 db 实例

2. `src/lib/db/test-connection.ts`
   - **已删除**：原用于本地数据库连接测试

### 项目结构
```
amazon-tools-blog/
├── src/
│   ├── lib/
│   │   ├── db/
│   │   │   └── schema.ts        # 数据库表定义和连接配置
│   │   └── ...
│   └── ...
├── .env                         # 环境变量配置 (可选，用于本地开发)
└── package.json                 # 项目依赖配置
```

### 环境变量
- `DATABASE_URL`: PostgreSQL 数据库连接字符串 (使用托管数据库服务提供的连接字符串)
  - 示例 (Supabase): `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`

### 数据库表结构

#### users（用户表）
- id: SERIAL PRIMARY KEY
- email: TEXT NOT NULL UNIQUE
- name: TEXT
- password: TEXT NOT NULL
- created_at: TIMESTAMP DEFAULT NOW()
- updated_at: TIMESTAMP DEFAULT NOW()

#### posts（博客文章表）
- id: SERIAL PRIMARY KEY
- title: TEXT NOT NULL
- content: TEXT NOT NULL
- author_id: INTEGER REFERENCES users(id)
- published: BOOLEAN DEFAULT FALSE
- created_at: TIMESTAMP DEFAULT NOW()
- updated_at: TIMESTAMP DEFAULT NOW()

#### keywords（关键词表）
- id: SERIAL PRIMARY KEY
- asin: TEXT NOT NULL
- keyword: TEXT NOT NULL
- rank: INTEGER
- created_at: TIMESTAMP DEFAULT NOW()
- updated_at: TIMESTAMP DEFAULT NOW()

#### rank_history（排名历史表）
- id: SERIAL PRIMARY KEY
- keyword_id: INTEGER REFERENCES keywords(id)
- rank: INTEGER NOT NULL
- date: TIMESTAMP DEFAULT NOW()

#### asins（ASIN表）
- id: SERIAL PRIMARY KEY
- asin: TEXT NOT NULL UNIQUE
- note: TEXT
- created_at: TIMESTAMP DEFAULT NOW()
- updated_at: TIMESTAMP DEFAULT NOW()

### 开发环境
- Node.js
- PostgreSQL (pgAdmin 4)
- Next.js 14.2.29
- TypeScript

### 部署
- 使用 Vercel 进行部署
- 需要配置环境变量 `DATABASE_URL`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### 部署步骤

1. **选择托管数据库服务**
   - 推荐使用 [Supabase](https://supabase.com) 或其他免费托管 PostgreSQL 服务。

2. **创建数据库并获取连接字符串**
   - 在选择的托管服务上创建一个新的 PostgreSQL 数据库。
   - 获取数据库连接字符串 (URI 格式)。

3. **在托管数据库中创建表**
   - 使用托管服务提供的 SQL 编辑器运行项目历史记录中提供的 SQL 脚本来创建数据库表结构。

4. **Vercel 部署配置**
   - 访问 [Vercel 仪表板](https://vercel.com/dashboard)
   - 点击 "Add New..." > "Project"
   - 选择 GitHub 仓库 `amazon-tools-blog`
   - 在项目设置中配置以下内容：
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `next build`
     - Output Directory: .next
     - Install Command: `npm install`

5. **环境变量配置**
   - 在 Vercel 项目设置中找到 "Environment Variables"
   - 添加或更新 `DATABASE_URL` 环境变量，粘贴托管数据库提供的连接字符串。

6. **部署验证**
   - 在 Vercel 仪表板中点击 "Deploy"
   - 等待部署完成
   - 检查部署日志是否有错误
   - 访问部署的网站 URL 验证功能

### 注意事项
- 将敏感信息 (如数据库密码) 存储在环境变量中，不要直接写入代码。
- 确保托管数据库的安全设置和访问权限配置正确。
