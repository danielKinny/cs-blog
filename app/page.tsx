"use client";
import DecryptedText from "@/components/DecryptedText/DecryptedText";
import Silk from "@/components/Silk/Silk";
import SplitText  from "@/components/SplitText/SplitText";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div
        className="text-7xl font-extrabold text-center text-red-700 flex items-center justify-center min-h-screen bg-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/computer.jpg)" }}
      >
        <div className="text-white">
          <div className="bg-[#7a2531] p-6 drop-shadow-xl rounded-lg backdrop-blur-sm">
            <DecryptedText
              text={"BEYOND THE SYLLABUS"}
              animateOn="view"
              speed={50}
              revealDirection="center"
              sequential={true}
            />
          </div>

          <div className="text-xl mt-2 bg-[#7a2531] p-2 drop-shadow-xl rounded-lg backdrop-blur-sm block">
            <DecryptedText
              text={"Scroll to find out what we're all about!"}
              animateOn="view"
              speed={20}
              revealDirection="center"
              sequential={true}
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full relative" style={{ height: "100vh" }}>
        <Silk
          speed={5}
          scale={1}
          color="#7a2531"
          noiseIntensity={1.5}
          rotation={0}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center text-white mx-8 max-w-4xl">
            <div className="mb-12">
              <SplitText
                text={
                  "Read our blog for insights and opportunities that help you delve into the world of computer science."
                }
                className="p-4 bg-red-900 text-white rounded-lg drop-shadow-2xl text-5xl font-bold"
                duration={0.6}
                ease="power3.out(1, 0.3)"
              />
            </div>
            
            <div className="mb-12">
              <Link
                href="/blog"
                className="group inline-flex items-center px-8 py-4 bg-white text-[#7a2531] font-bold text-xl rounded-lg 
                         hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 
                         shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-yellow-400
                         backdrop-blur-sm"
              >
                <span className="mr-2">Explore Our Blog</span>
                <svg 
                  className="w-6 h-6 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 
                            hover:bg-white/20 hover:border-white/40 hover:scale-105 
                            transition-all duration-300 cursor-pointer hover:shadow-2xl">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  Latest Insights
                </div>
                <p className="text-red-100 group-hover:text-white transition-colors">
                  Stay updated with cutting-edge CS trends and industry developments
                </p>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 
                            hover:bg-white/20 hover:border-white/40 hover:scale-105 
                            transition-all duration-300 cursor-pointer hover:shadow-2xl">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  Real Projects
                </div>
                <p className="text-red-100 group-hover:text-white transition-colors">
                  Learn through hands-on tutorials and practical implementations
                </p>
              </div>
              <div className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 
                            hover:bg-white/20 hover:border-white/40 hover:scale-105 
                            transition-all duration-300 cursor-pointer hover:shadow-2xl">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  Career Guidance
                </div>
                <p className="text-red-100 group-hover:text-white transition-colors">
                  Get advice from industry professionals and successful graduates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2531] mb-4">Why Choose Beyond the Syllabus?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between academic learning and real-world application in computer science
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#7a2531] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#7a2531] mb-3">Industry-Relevant Content</h3>
              <p className="text-gray-600">
                Learn the skills and technologies that are actually used in the industry, not just academic theory.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#7a2531] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#7a2531] mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Join a community of passionate learners and professionals sharing knowledge and experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#7a2531] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#7a2531] mb-3">Hands-On Projects</h3>
              <p className="text-gray-600">
                Build real projects that you can showcase in your portfolio and use in job interviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="py-16 bg-[#7a2531]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Blog Articles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Course Topics</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </div>*/}

      {
        /*
        code above will be commented out until we get actual stats
        */
      }

      <div className=" bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2531] mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600">
              Explore the most in-demand areas of computer science
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Machine Learning", 
                color: "bg-blue-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 9v6m3-3H9"/>
                  </svg>
                )
              },
              { 
                name: "Web Development", 
                color: "bg-green-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v3h4v4h-4v3z"/>
                  </svg>
                )
              },
              { 
                name: "Data Structures", 
                color: "bg-purple-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )
              },
              { 
                name: "System Design", 
                color: "bg-orange-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-10-4h6v2H9v-2zm0-4h6v2H9v-2z"/>
                  </svg>
                )
              },
              { 
                name: "Algorithms", 
                color: "bg-red-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                  </svg>
                )
              },
              { 
                name: "Cybersecurity", 
                color: "bg-indigo-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16.2V16H7.8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                )
              },
              { 
                name: "Cloud Computing", 
                color: "bg-teal-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                )
              },
              { 
                name: "Mobile Development", 
                color: "bg-pink-500",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"/>
                  </svg>
                )
              }
            ].map((topic, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 ${topic.color} rounded-lg mb-4 group-hover:scale-110 transition-transform flex items-center justify-center`}>
                    {topic.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-[#7a2531] transition-colors">
                    {topic.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2531] mb-4">Meet the Team Behind Beyond the Syllabus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate students and professionals dedicated to bridging the gap between academic theory and real-world application
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#7a2531] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re computer science students who understand the challenges of translating classroom knowledge into practical skills. 
                  Our mission is to provide insights, tutorials, and guidance that help fellow students excel in both academics and industry.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#7a2531] mb-4">Why We Started</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recognizing the gap between university curricula and industry demands, we created this platform to share
                  real-world experiences, practical projects, and career insights that textbooks don&apos;t cover.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <div className="w-24 h-24 bg-[#7a2531] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.994 2.994 0 0 0 17.11 7H16c-.8 0-1.54.37-2.01.98l-2.8 3.63a1 1 0 0 0 .19 1.4l5.31 4.17V22h3zM12.83 18.02L16 15.84V18c0 1.1-.9 2-2 2h-2v2H8v-2c-1.1 0-2-.9-2-2v-5.17l2.8-3.63A2.99 2.99 0 0 1 11.17 8H12c.27 0 .54.04.8.1L10.46 11H8.17L7 13.17V18h5.83z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7a2531] mb-4">Student-Led Initiative</h3>
                <p className="text-gray-600 mb-6">
                  Learn about our journey, our team members, and how we&apos;re working to revolutionize CS education.
                </p>
              </div>
              
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-[#7a2531] text-white font-bold text-lg rounded-lg 
                         hover:bg-[#6b1e2a] transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">Learn About Our Team</span>
                <svg 
                  className="w-6 h-6 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#7a2531] mb-4">Featured CIS Courses</h2>
            <p className="text-xl text-gray-600">
              Explore key Computer Information Systems courses and get insights beyond the classroom
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                code: "0478",
                name: "IGCSE Computer Science",
                description: "Learn fundamental programming concepts and problem-solving techniques using Python.",
                difficulty: "Intermediate",
                color: "bg-green-500",
                href:"/cis/0478",
              },
              {
                code: "0417", 
                name: "IGCSE Information Technology",
                description: "Master essential data structures and algorithms for efficient programming solutions.",
                difficulty: "Intermediate",
                color: "bg-blue-500",
                href:"/cis/0417",
              },
              {
                code: "9618",
                name: "A-Level Computer Science",
                description: "Explore advanced topics in computer science including databases, networks, and security.",
                difficulty: "Advanced",
                color: "bg-purple-500",
                href:"/cis/9618",
              },
              {
                code: "9626",
                name: "A-Level Information Technology",
                description: "Learn software development methodologies and best practices for building robust applications.",
                difficulty: "Advanced",
                color: "bg-red-500",
                href:"/cis/9626"
              },
              
            ].map((course, index) => (
              <a href={course.href} key={index} className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 ${course.color} text-white text-sm font-bold rounded-full`}>
                    {course.code}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {course.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#7a2531] transition-colors">
                  {course.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center text-[#7a2531] text-sm font-medium group-hover:text-[#6b1e2a] transition-colors">
                  <span className="mr-2">Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/cis"
              className="inline-flex items-center px-8 py-4 bg-[#7a2531] text-white font-bold text-lg rounded-lg 
                       hover:bg-[#6b1e2a] transition-all duration-300 transform hover:scale-105 
                       shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">View All CIS Courses</span>
              <svg 
                className="w-6 h-6 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-[#7a2531] to-[#6b1e2a]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go Beyond the Syllabus?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their CS journey with practical, industry-relevant learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/courses"
              className="px-8 py-4 bg-white text-[#7a2531] font-bold text-lg rounded-lg 
                       hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 
                       shadow-lg hover:shadow-xl"
            >
              Browse Courses
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent text-white font-bold text-lg rounded-lg 
                       border-2 border-white hover:bg-white hover:text-[#7a2531] 
                       transition-all duration-300 transform hover:scale-105"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
