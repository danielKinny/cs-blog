import Link from "next/link";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-6 animate-slide-down">
            Welcome to Beyond the Syllabus
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto animate-slide-up">
            Your go-to resource for computer science concepts, programming tutorials, 
            and insights into the world of technology. From algorithms to web development, 
            we cover it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay">
            <Link 
              href="/blog" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Read the Blog
            </Link>
            <Link 
              href="/blog/getting-started-with-algorithms" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Learning
            </Link>
          </div>
          

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <a className="bg-white p-6 rounded-lg shadow-md animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0}} href="/blog">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                  <h3 className="text-xl text-black font-semibold mb-3">Dive into interesting articles</h3>
                <p className="text-black">
                  Learn about the latest trends in computer science, programming, and technology through our engaging blog posts.
                </p>
              </a>

            <a className="bg-white p-6 rounded-lg shadow-md animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0}} href="/offers">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">Avail of your benefits</h3>
              <p className="text-black">
                Uncover exclusive resources, tips, and opportunities designed to support your journey in computer science and technology.
              </p>
            </a>

            <a className="bg-white p-6 rounded-lg shadow-md animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0}} href="/courses">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">Explore the courses that CIS offers</h3>
              <p className="text-black">
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
