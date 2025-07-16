import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-red-900 shadow-lg border-b border-red-800" style={{backgroundColor: '#7a2531'}}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-yellow-300 transition-colors">
            Beyond the Syllabus
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/courses" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              Courses
            </Link>
            <Link
              href="/cis" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              CIS
            </Link>
            <Link href="/about" className="text-red-100 hover:text-yellow-300 transition-colors font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
