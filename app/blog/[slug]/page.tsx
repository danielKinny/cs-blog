import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { BlogPost } from '@/types/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 animate-fade-in">
          <Link 
            href="/blog" 
            className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
          >
            ← Back to Blog
          </Link>
        </nav>

        <header className="mb-8 animate-slide-down">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-800 mb-6 animate-slide-up">
            <time dateTime={post.date} className="transition-colors duration-200 hover:text-blue-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            
            {post.author && (
              <span className="transition-colors duration-200 hover:text-blue-600">by {post.author}</span>
            )}
            
            {post.readingTime && (
              <span className="transition-colors duration-200 hover:text-blue-600">{post.readingTime} min read</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm transform transition-all duration-200 hover:scale-110 hover:bg-blue-200 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="bg-white rounded-lg shadow-lg border border-blue-100 p-8 text-blue-900">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
          </div>
        </article>

        <footer className="mt-12 pt-8 border-t border-blue-200">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700"
          >
            ← Back to all posts
          </Link>
        </footer>
      </div>
    </div>
  );
}

function formatContent(content: string): string {
  return content
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8 text-blue-900">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 mt-6 text-blue-900">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mb-2 mt-4 text-blue-900">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-blue-800">$1</em>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-blue-50 border border-blue-200 p-4 rounded-lg overflow-x-auto mb-4 text-blue-900"><code class="text-sm text-blue-900">$2</code></pre>')
    .replace(/`(.*?)`/g, '<code class="bg-blue-100 px-1 py-0.5 rounded text-sm text-blue-900">$1</code>')
    .replace(/^\- (.*$)/gim, '<li class="mb-1 text-blue-800">$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li class="mb-1 text-blue-800">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-blue-800">')
    .replace(/^(?!<[h1-6]|<li|<pre|<ul|<ol)/gm, '<p class="mb-4 text-blue-800">')
    .replace(/<\/p><p class="mb-4 text-blue-800">(<[h1-6])/g, '$1')
    .replace(/<\/p><p class="mb-4 text-blue-800">(<pre)/g, '$1')
    + '</p>';
}
