import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-16 animate-fade-in">
          <div className="w-full max-w-6xl mx-auto animate-slide-down">
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7a2531] mb-2 text-center">
                Our Mission & Vision
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-lift animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7a2531] to-[#c14242] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#7a2531]">Our Mission</h3>
                </div>
                <p className="text-[#6b1e2a] text-lg leading-relaxed">
                  To bridge the gap between academic learning and real-world application by providing students 
                  with practical insights, course reviews, and guidance that empowers them to make informed 
                  decisions about their academic and career paths in computer science and technology.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-lift animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#7a2531] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#7a2531]">Our Vision</h3>
                </div>
                <p className="text-[#6b1e2a] text-lg leading-relaxed">
                  To create a comprehensive platform where students can access honest course reviews, 
                  discover exciting extracurricular opportunities, and gain the confidence to pursue 
                  their passions in technology while building a supportive community of learners.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl mx-auto animate-fade-in-delay">
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7a2531] mb-2 text-center">
                About the Founders
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 w-full">
            <div className="flex flex-col items-center text-center space-y-6 animate-slide-up">
              <div className="flex-shrink-0 relative">
                <div className="absolute max-h-4xl -inset-4 bg-gradient-to-r from-[#7a2531] via-[#d4af37] to-[#c14242] rounded-full opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#7a2531]/10 to-[#d4af37]/10 rounded-full p-4">
                  <Image
                    src="/riddhi.jpeg"
                    alt="Riddhiman Premkumar"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-[200px] h-[200px]"
                  />
                </div>
              </div>

              <div className="text-[#6b1e2a] space-y-4 text-lg leading-relaxed max-w-2xl">
                <h3 className="text-2xl font-bold text-[#7a2531]">
                  Riddhiman Premkumar
                </h3>
                <p>
                  Hi, I&apos;m{" "}
                  <span className="text-[#7a2531] font-bold text-xl">
                    Riddhiman Premkumar
                  </span>
                  —a 17-year-old football-loving, tech-building student from CIS who
                  somehow decided that juggling school, side projects, and future
                  ambitions was a fun idea. I&apos;m the founder of this initiative,
                  built for students who are navigating the chaos of college
                  applications, academic life, and trying to figure out what on
                  earth <em>&apos;career-ready skills&apos;</em> even mean.
                </p>
                <p>
                  I&apos;m also someone who&apos;s deeply passionate about creating
                  things that are both fun and impactful. Whether it&apos;s building
                  quirky personal projects, exploring how complex systems work, or
                  diving into how AI powers the tools we use every day, I love
                  uncovering the &apos;how&apos; behind the &apos;wow.&apos; In my free time,
                  you&apos;ll often find me experimenting with LLMs to build smart
                  AI models, or working with Arduino and NodeMCU to bring my ideas
                  into the physical world through hardware. I enjoy picking up new
                  skills, solving real-world problems, and most of all — learning by
                  building. I believe in using technology as a force for good and
                  one that can benefit others. I&apos;m always exploring, always
                  building, and always excited about what&apos;s next.
                </p>
                <p>
                  So with that being said, I&apos;m starting here—empowering
                  students like you to{" "}
                  <span className="text-[#c14242] font-semibold">dream bigger</span>
                  ,{" "}
                  <span className="text-[#7a2531] font-semibold">
                    learn smarter
                  </span>
                  , and{" "}
                  <span className="text-[#d4af37] font-semibold">
                    take charge of your future
                  </span>
                  . Because success shouldn&apos;t be a secret—and together,
                  we&apos;re unlocking it.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex-shrink-0 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#c14242] via-[#7a2531] to-[#d4af37] rounded-full opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#c14242]/10 to-[#7a2531]/10 rounded-full p-4">
                  <Image
                    src="/danny.JPG"
                    alt="Daniel Kinny"
                    width={200}
                    height={200}
                    className="rounded-full object-cover w-[200px] h-[200px]"
                  />
                </div>
              </div>

              <div className="text-[#6b1e2a] space-y-4 text-lg leading-relaxed max-w-2xl">
                <h3 className="text-2xl font-bold text-[#7a2531]">Daniel Kinny</h3>
                <p>
                  Hey, I&apos;m{" "}
                  <span className="text-[#7a2531] font-bold text-xl">
                    Daniel Kinny
                  </span>{" "}
                  — a 17-year-old student currently studying at CIS. I&apos;ve
                  always been drawn to computers and how they work. Over time, that
                  interest has grown into a real passion for software engineering
                  and computer science. I enjoy exploring how digital tools are
                  built, breaking things down to see how they tick, and using that
                  knowledge to create things of my own.
                </p>
                <p>
                  I&apos;m the kind of person who&apos;s always curious — whether
                  it&apos;s learning a new coding language, experimenting with a
                  project, or diving into something I&apos;ve never tried before. I
                  love the challenge of{" "}
                  <span className="text-[#c14242] font-semibold">
                    solving problems with tech
                  </span>{" "}
                  and making things that actually help people.
                </p>
                <p>
                  These days, I&apos;m spending my time sharpening my skills,
                  building personal projects, and figuring out how I can use what I
                  know to make a difference. I&apos;m especially interested in
                  things like{" "}
                  <span className="text-[#d4af37] font-semibold">AI</span>,{" "}
                  <span className="text-[#7a2531] font-semibold">the web</span>, and{" "}
                  <span className="text-[#c14242] font-semibold">
                    user-focused design
                  </span>
                  . One day, I hope to be part of a team that&apos;s pushing
                  technology forward in meaningful ways.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto animate-slide-down" style={{animationDelay: '0.6s'}}>
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7a2531] mb-2 text-center">
                What We Offer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover-lift animate-slide-up" style={{animationDelay: '0.8s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-[#7a2531] to-[#c14242] rounded-full flex items-center justify-center mx-auto mb-4 ">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7a2531] mb-3">Course Reviews</h3>
                <p className="text-[#6b1e2a]">
                  Honest, detailed reviews of CS and IT courses from students who&apos;ve been there. 
                  Get the real scoop on difficulty, workload, and what you&apos;ll actually learn.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover-lift animate-slide-up" style={{animationDelay: '1.0s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#7a2531] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7a2531] mb-3">Extracurriculars</h3>
                <p className="text-[#6b1e2a]">
                  Discover amazing opportunities beyond the classroom. From coding competitions 
                  to tech clubs, find your tribe and build your portfolio.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover-lift animate-slide-up" style={{animationDelay: '1.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-[#c14242] to-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4 ">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7a2531] mb-3">Career Insights</h3>
                <p className="text-[#6b1e2a]">
                  Get practical advice on building your skills, preparing for internships, 
                  and making the most of your tech education journey.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full max-w-4xl mx-auto animate-fade-in-delay" style={{animationDelay: '1.4s'}}>
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#7a2531] mb-2 text-center">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full mx-auto"></div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-lift">
              <div className="text-center space-y-6">
                <p className="text-[#6b1e2a] text-lg leading-relaxed max-w-2xl mx-auto">
                  Have questions? Want to share your course experience? Looking to get involved? 
                  We&apos;d love to hear from you! Reach out to us and let&apos;s build this community together.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:contact@example.com" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7a2531] to-[#c14242] text-white font-semibold rounded-full hover:from-[#6b1e2a] hover:to-[#a83735] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                  
                  <p className="text-[#6b1e2a] text-sm">
                    or find us around campus at CIS!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '1.6s'}}>
            <div className="bg-gradient-to-r from-[#7a2531]/10 via-[#d4af37]/10 to-[#c14242]/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover-lift">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full flex items-center justify-center mr-4 ">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#7a2531]">Proudly Supported By</h3>
                </div>
                
                <h4 className="text-3xl font-bold bg-gradient-to-r from-[#7a2531] via-[#d4af37] to-[#c14242] bg-clip-text text-transparent">
                  IT & Computer Science Department
                </h4>
                
                <p className="text-[#6b1e2a] text-lg leading-relaxed max-w-2xl mx-auto">
                  This website and initiative is made possible through the support and resources 
                  provided by the IT & Computer Science Department. We&apos;re grateful for their 
                  commitment to student success and innovation in technology education.
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-[#7a2531]/70">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Empowering student success through technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
