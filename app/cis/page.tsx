import React from 'react'

const courseData = [
  {
    id:1,
    title: '9626 — CIE Information Technology',
    description: 'Practical tools, projects and workplace skills.',
    details: 'Learn databases, spreadsheets, document production and website authoring through project-based assignments — excellent for students who like to build tangible solutions.',
    color: '#d4af37',
    href: "/cis/9626"
  },
  {
    id:2,
    title: '9618 — CIE Computer Science',
    description: 'Algorithms, programming and computational thinking.',
    details: 'Designed for students who want to understand how software and systems are built — strong focus on problem solving and coding skills that prepare you for A-Levels.',
    color: '#7a2531',
    href: "/cis/9618"
  },
  {
    id:3,
    title: '0417 — IGCSE Information Technology',
    description: 'Core ICT skills and practical digital literacy.',
    details: 'Covers spreadsheets in Excel, presentations using Microsoft Powerpoint, data handling and digital communication — great for students seeking immediate, practical skills for study or work.',
    color: '#d4af37',
    href: "/cis/0417"
  },
  {
    id:4,
    title: '0478 — IGCSE Computer Science',
    description: 'Structured introduction to programming and systems.',
    details: 'Balanced between written theory and practical programming — ideal if you want a strong foundation in the basics of computing, regarding processors and internal workings of a computer.',
    color: '#7a2531',
    href: "/cis/0478"
  },

]

const Page = () => {
  return (
    <div className='mx-auto min-h-screen bg-gradient-to-br from-red-50 to-red-100'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#7a2531] mb-6 animate-slide-down'>
            Explore the technology courses that CIS offers
          </h1>
        </div>

        <section className='mb-16'>
          <p className='text-center text-[#6b1e2a] mb-8 max-w-2xl mx-auto'>A curated selection of technology courses — each one is written to prepare you for study or work, whether you prefer theory, coding or hands-on projects.</p>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {courseData.map(course =>(
              <article key={course.id} className='relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white to-[#fff6f6] border border-[#f3dede] shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center space-x-4'>
                  <div>
                    <h3 className='text-lg font-semibold text-[#7a2531]'>{course.title}</h3>
                    <p className='text-sm text-[#6b1e2a]'>{course.description}</p>
                  </div>
                </div>
              </div>
              <p className='text-sm text-[#6b1e2a] mb-6'>{course.details}</p>
              <div className='flex items-center justify-between'>
                <a className={`text-sm text-[white] font-medium hover:underline bg-[${course.color}] p-2 rounded-lg`} href={course.href}>Learn more</a>
              </div>
            </article>))
            }
            
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-semibold text-[#7a2531] mb-8 text-center animate-slide-down'>Why Choose Technology Subjects?</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-6 cursor-pointer hover-lift transition-all duration-300 transform hover:scale-105 border border-[#e8d8da] animate-slide-in-left [animation-delay:0.2s] [animation-fill-mode:forwards]'>
              <div className='w-12 h-12 bg-[#fef2f2] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110'>
                <svg className='w-6 h-6 text-[#7a2531]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-[#7a2531]'>Problem-Solving Skills</h3>
              <p className='text-[#6b1e2a]'>
                Both subjects develop analytical thinking and systematic approaches to solving complex problems, 
                valuable in any career path you choose.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6 cursor-pointer hover-lift transition-all duration-300 transform hover:scale-105 border border-[#e8d8da] animate-slide-in-left [animation-delay:0.4s] [animation-fill-mode:forwards]'>
              <div className='w-12 h-12 bg-[#fef9e7] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110'>
                <svg className='w-6 h-6 text-[#d4af37]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-[#7a2531]'>Future-Ready Skills</h3>
              <p className='text-[#6b1e2a]'>
                Technology skills are essential in the modern workplace, regardless of your chosen field - 
                from business to healthcare to creative industries.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6 cursor-pointer hover-lift transition-all duration-300 transform hover:scale-105 border border-[#e8d8da] animate-slide-in-left [animation-delay:0.6s] [animation-fill-mode:forwards]'>
              <div className='w-12 h-12 bg-[#faf0f0] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110'>
                <svg className='w-6 h-6 text-[#c14242]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-[#7a2531]'>Strong Foundation</h3>
              <p className='text-[#6b1e2a]'>
                IGCSE provides an excellent foundation for A-Level studies and university courses in 
                technology, engineering, and related fields.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6 cursor-pointer hover-lift transition-all duration-300 transform hover:scale-105 border border-[#e8d8da] animate-slide-in-left [animation-delay:0.8s] [animation-fill-mode:forwards]'>
              <div className='w-12 h-12 bg-[#fef7e7] rounded-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110'>
                <svg className='w-6 h-6 text-[#d4af37]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-3 text-[#7a2531]'>Career Opportunities</h3>
              <p className='text-[#6b1e2a]'>
                Opens doors to high-demand careers in software development, system administration, 
                digital design, and technology consulting.
              </p>
            </div>
          </div>
        </section>

        <section className='text-center bg-white rounded-lg shadow-lg p-8 border border-[#e8d8da] hover-lift transition-all duration-300'>
          <h2 className='text-3xl font-semibold text-[#7a2531] mb-4'>Which Subject Should You Choose?</h2>
          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div className='bg-[#fef2f2] rounded-lg p-6 hover-lift transition-all duration-300 transform hover:scale-105'>
              <h3 className='text-xl font-semibold text-[#7a2531] mb-4'>Choose Computer Science if you:</h3>
              <ul className='text-left space-y-2 text-[#6b1e2a]'>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                  <span>Enjoy logical thinking and problem-solving</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                  <span>Are interested in programming and coding</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                  <span>Want to understand how technology works</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                  <span>Plan to pursue A-Level Computer Science</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                  <span>Enjoy mathematics and abstract thinking</span>
                </li>
              </ul>
            </div>
            <div className='bg-[#fef9e7] rounded-lg p-6 hover-lift transition-all duration-300 transform hover:scale-105'>
              <h3 className='text-xl font-semibold text-[#7a2531] mb-4'>Choose IT if you:</h3>
              <ul className='text-left space-y-2 text-[#6b1e2a]'>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                  <span>Prefer practical, hands-on learning</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                  <span>Are interested in digital design and multimedia</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                  <span>Want to solve real-world business problems</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                  <span>Prefer coursework-based assessment</span>
                </li>
              </ul>
            </div>
          </div>
          <p className='text-lg text-[#6b1e2a] mb-6 max-w-2xl mx-auto'>
            Remember, both subjects offer valuable skills and exciting career opportunities. Consider your interests, 
            learning style, and future goals when making your decision.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Page