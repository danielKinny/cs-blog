import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-300 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-blue-800 mb-8">
            Sorry, the blog post you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/blog" 
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg"
          >
            Browse All Posts
          </Link>
          <div>
            <Link 
              href="/" 
              className="text-blue-900 hover:text-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
