# CS Blog

A modern blog built with Next.js 15, focusing on computer science concepts, programming tutorials, and technology insights.

## Features

- 📚 Clean, responsive blog layout
- 🎯 Individual blog post pages with dynamic routing
- 🏷️ Tag-based categorization
- 📱 Mobile-friendly design
- ⚡ Fast static generation
- 🎨 Beautiful UI with Tailwind CSS

## Blog Structure

- **Home Page** (`/`) - Welcome page with blog overview and navigation
- **Blog Index** (`/blog`) - List of all blog posts
- **Individual Posts** (`/blog/[slug]`) - Dynamic blog post pages

### Sample Posts

The blog comes with three sample posts:
1. "Getting Started with Data Structures and Algorithms"
2. "Understanding Big O Notation: A Complete Guide" 
3. "Modern React Development with Hooks"

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   ├── page.tsx          # Individual blog post page
│   │   │   └── not-found.tsx     # 404 page for missing posts
│   │   └── page.tsx              # Blog index page
│   ├── layout.tsx                # Root layout with navigation
│   └── page.tsx                  # Home page
├── components/
│   └── Navigation.tsx            # Site navigation component
├── lib/
│   └── blog.ts                   # Blog data and utilities
└── types/
    └── blog.ts                   # TypeScript types for blog posts
```

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

## Adding New Blog Posts

To add new blog posts, edit the `samplePosts` array in `lib/blog.ts`. Each post should have:

- `slug`: URL-friendly identifier
- `title`: Post title
- `excerpt`: Brief description
- `content`: Full post content (supports basic markdown-like formatting)
- `date`: Publication date
- `tags`: Array of category tags
- `author`: Author name (optional)
- `readingTime`: Estimated reading time in minutes (optional)

## Extending the Blog

### Adding Real Content Management

Replace the static data in `lib/blog.ts` with:
- Markdown files (using libraries like `gray-matter` and `remark`)
- Headless CMS integration (Contentful, Strapi, etc.)
- Database integration (PostgreSQL, MongoDB, etc.)

### Adding Features

- Search functionality
- Comment system
- RSS feed
- Related posts
- Author pages
- Categories/tags pages

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
