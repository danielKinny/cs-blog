import Link from "next/link";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 animate-slide-down text-[#7a2531]">
            Welcome to Beyond the Syllabus
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up text-[#6b1e2a]">
            Your go-to resource for computer science concepts, programming tutorials, 
            and insights into the world of technology. From algorithms to web development, 
            we cover it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay">
            <Link 
              href="/blog" 
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg bg-[#7a2531]"
            >
              Read the Blog
            </Link>
            <Link 
              href="/blog/getting-started-with-algorithms" 
              className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg bg-[#d4af37]"
            >
              Start Learning
            </Link>
          </div>
          

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Link className="bg-white p-6 rounded-lg shadow-lg border border-[#e8d8da] animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl [animation-delay:0.2s] [animation-fill-mode:forwards]" href="/blog">
                <div className="w-12 h-12 rounded-lg bg-[#fef2f2] flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-[#7a2531]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#7a2531]">Dive into interesting articles</h3>
                <p className="text-[#6b1e2a]">
                  Learn about the latest trends in computer science, programming, and technology through our engaging blog posts.
                </p>
              </Link>

            <Link className="bg-white p-6 rounded-lg shadow-lg border border-[#e8d8da] animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl [animation-delay:0.4s] [animation-fill-mode:forwards]" href="/courses">
              <div className="w-12 h-12 rounded-lg bg-[#fef9e7] flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#7a2531]">Explore Recommended Courses</h3>
              <p className="text-[#6b1e2a]">
                Discover curated courses from industry-leading platforms to advance your skills in programming, cybersecurity, data science, and more.
              </p>
            </Link>

            <Link className="bg-white p-6 rounded-lg shadow-lg border border-[#e8d8da] animate-slide-in-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl [animation-delay:0.6s] [animation-fill-mode:forwards]" href="/cis">
              <div className="w-12 h-12 rounded-lg bg-[#fef2f2] flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6 text-[#c14242]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#7a2531]">Explore the courses that CIS offers</h3>
              <p className="text-[#6b1e2a]">
                Discover the subjects you can choose during your IGCSEs and A-Levels that can help launch your career into Computer Science.
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7a2531]/5 to-[#d4af37]/5 rounded-3xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#c14242]/5 to-transparent rounded-3xl transform -rotate-1"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl border border-[#e8d8da] p-10 md:p-12 mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#7a2531]/10 to-transparent rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#d4af37]/10 to-transparent rounded-tl-3xl"></div>
            
            <div className="flex flex-col items-center gap-12">
              <div className="relative mb-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#7a2531] mb-2 text-center">
                  About the Founders
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 w-full">
                {/* Riddhiman's Profile */}
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex-shrink-0 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#7a2531] via-[#d4af37] to-[#c14242] rounded-full opacity-20 blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-[#7a2531]/10 to-[#d4af37]/10 rounded-full p-4">
                      <Image
                        src="/riddhi.jpeg"
                        alt="Riddhiman Premkumar"
                        width={200}
                        height={200}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-[#6b1e2a] space-y-4 text-lg leading-relaxed">
                    <h3 className="text-2xl font-bold text-[#7a2531]">Riddhiman Premkumar</h3>
                    <p>
                      Hi, I'm <span className="text-[#7a2531] font-bold text-xl">Riddhiman Premkumar</span>—a 17-year-old football-loving, tech-building student from CIS who somehow decided that juggling school, side projects, and future ambitions was a fun idea. I'm the founder of this initiative, built for students who are navigating the chaos of college applications, academic life, and trying to figure out what on earth <em>"career-ready skills"</em> even mean.
                    </p>
                    <p>
                      I've always loved helping others—whether it's helping a person in need, explaining a tricky concept or brainstorming big ideas at 2 AM that I swear could be the next billion-dollar startup. My dream? To launch my own tech company one day—and maybe <span className="text-[#d4af37] font-semibold">change the world</span> while I'm at it.
                    </p>
                    <p>
                      But until then, I'm starting here—empowering students like you to <span className="text-[#c14242] font-semibold">dream bigger</span>, <span className="text-[#7a2531] font-semibold">learn smarter</span>, and <span className="text-[#d4af37] font-semibold">take charge of your future</span>. Because success shouldn't be a secret—and together, we're unlocking it.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex-shrink-0 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#c14242] via-[#7a2531] to-[#d4af37] rounded-full opacity-20 blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-[#c14242]/10 to-[#7a2531]/10 rounded-full p-4">
                      <Image
                        src="/danny.jpeg"
                        alt="Daniel Kinny"
                        width={200}
                        height={200}
                        className="rounded-full object-"
                      />
                    </div>
                  </div>
                  
                  <div className="text-[#6b1e2a] space-y-4 text-lg leading-relaxed">
                    <h3 className="text-2xl font-bold text-[#7a2531]">Daniel Kinny</h3>
                    <p>
                      Hey, I'm <span className="text-[#7a2531] font-bold text-xl">Daniel Kinny</span> — a 17-year-old student currently studying at CIS. I've always been drawn to computers and how they work. Over time, that interest has grown into a real passion for software engineering and computer science. I enjoy exploring how digital tools are built, breaking things down to see how they tick, and using that knowledge to create things of my own.
                    </p>
                    <p>
                      I'm the kind of person who's always curious — whether it's learning a new coding language, experimenting with a project, or diving into something I've never tried before. I love the challenge of <span className="text-[#c14242] font-semibold">solving problems with tech</span> and making things that actually help people.
                    </p>
                    <p>
                      These days, I'm spending my time sharpening my skills, building personal projects, and figuring out how I can use what I know to make a difference. I'm especially interested in things like <span className="text-[#d4af37] font-semibold">AI</span>, <span className="text-[#7a2531] font-semibold">the web</span>, and <span className="text-[#c14242] font-semibold">user-focused design</span>. One day, I hope to be part of a team that's pushing technology forward in meaningful ways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews />

    </div>
  );
}
