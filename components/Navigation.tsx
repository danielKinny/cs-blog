import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-900 shadow-lg border-b border-blue-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-amber-300 transition-colors">
            Beyond the Syllabus
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-blue-100 hover:text-amber-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-blue-100 hover:text-amber-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/courses" 
              className="text-blue-100 hover:text-amber-300 transition-colors font-medium"
            >
              Courses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
