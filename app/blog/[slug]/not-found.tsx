import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#fef2f2'}}>
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4" style={{color: '#e8d8da'}}>404</h1>
          <h2 className="text-2xl font-semibold mb-4" style={{color: '#7a2531'}}>
            Blog Post Not Found
          </h2>
          <p className="mb-8" style={{color: '#6b1e2a'}}>
            Sorry, the blog post you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/blog" 
            className="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors shadow-lg"
            style={{backgroundColor: '#7a2531'}}
          >
            Browse All Posts
          </Link>
          <div>
            <Link 
              href="/" 
              className="hover:opacity-80 transition-colors"
              style={{color: '#7a2531'}}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
