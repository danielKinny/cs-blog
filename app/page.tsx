import Link from "next/link";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100" style={{background: 'linear-gradient(to bottom right, #fef2f2, #fee2e2)'}}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-down" style={{color: '#7a2531'}}>
            Welcome to Beyond the Syllabus
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up" style={{color: '#6b1e2a'}}>
            Your go-to resource for computer science concepts, programming tutorials, 
            and insights into the world of technology. From algorithms to web development, 
            we cover it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay">
            <Link 
              href="/blog" 
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{backgroundColor: '#7a2531'}}
            >
              Read the Blog
            </Link>
            <Link 
              href="/blog/getting-started-with-algorithms" 
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{backgroundColor: '#d4af37'}}
            >
              Start Learning
            </Link>
          </div>
          

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <a className="bg-white p-6 rounded-lg shadow-lg border animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{borderColor: '#e8d8da', animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0}} href="/blog">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110" style={{backgroundColor: '#fef2f2'}}>
                  <svg className="w-6 h-6" style={{color: '#7a2531'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#7a2531'}}>Dive into interesting articles</h3>
                <p style={{color: '#6b1e2a'}}>
                  Learn about the latest trends in computer science, programming, and technology through our engaging blog posts.
                </p>
              </a>

            <a className="bg-white p-6 rounded-lg shadow-lg border animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{borderColor: '#e8d8da', animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0}} href="/courses">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110" style={{backgroundColor: '#fef9e7'}}>
                <svg className="w-6 h-6" style={{color: '#d4af37'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#7a2531'}}>Explore Recommended Courses</h3>
              <p style={{color: '#6b1e2a'}}>
                Discover curated courses from industry-leading platforms to advance your skills in programming, cybersecurity, data science, and more.
              </p>
            </a>

            <a className="bg-white p-6 rounded-lg shadow-lg border animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{borderColor: '#e8d8da', animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0}} href="/cis">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110" style={{backgroundColor: '#fef2f2'}}>
                <svg className="w-6 h-6" style={{color: '#c14242'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#7a2531'}}>Explore the courses that CIS offers</h3>
              <p style={{color: '#6b1e2a'}}>
                Discover the subjects you can choose during your IGCSEs and A-Levels that can help launch your career into Computer Science.
              </p>
            </a>
          </div>
        </div>
      </div>
      
      <Reviews />
    </div>
  );
}
