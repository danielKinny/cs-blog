import Link from 'next/link';
import {
  HomeIcon,
  BuildingLibraryIcon,
  PencilIcon,
  FlagIcon,
  BugAntIcon,
} from '@heroicons/react/24/solid';

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
              <HomeIcon className="inline h-5 w-5 mr-2 mb-1" />
              Home
              
            </Link>
            <Link 
              href="/blog" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              <PencilIcon className="inline h-5 w-5 mr-2 mb-1" />
              Blog
              
            </Link>
            <Link 
              href="/courses" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              <FlagIcon className="inline h-5 w-5 mr-2 mb-1" />
              Courses
              
            </Link>
            <Link
              href="/cis" 
              className="text-red-100 hover:text-yellow-300 transition-colors font-medium"
            >
              <BuildingLibraryIcon className="inline h-5 w-5 mb-1 mr-2" />
              CIS
            </Link>
            <Link href="/about" className="text-red-100 hover:text-yellow-300 transition-colors font-medium">
              <BugAntIcon className="inline h-5 w-5 mr-2 mb-1" />
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
