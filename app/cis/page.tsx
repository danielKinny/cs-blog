import React from 'react'

const Page = () => {
  return (
    <div className='mx-auto min-h-screen bg-gradient-to-br from-red-50 to-red-100'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#7a2531] mb-6 animate-slide-down'>
            Explore the technology courses that CIS offers
          </h1>
          <p className='text-xl text-[#6b1e2a] max-w-3xl mx-auto animate-slide-up'>
            Understanding the differences between IGCSE Computer Science and Information Technology 
            to help you choose the path that aligns with your interests and career goals.
          </p>
        </div>

        <section className='mb-16 animate-fade-in-delay'>
          <div className='bg-white rounded-lg shadow-lg p-8 border border-[#e8d8da] hover-lift transition-all duration-300'>
            <h2 className='text-3xl font-semibold text-[#7a2531] mb-6'>Choosing Your IGCSE Technology Path</h2>
            <p className='text-lg text-[#6b1e2a] mb-4'>
            Technology has become an essential part of our lives. As the digital landscape continues to evolve,
            the demand for skilled professionals in technology fields grows rapidly. Nowadays skills like prompt-engineering,
            programming, and data analysis could be the deciding factor in the viability of your future career.
            </p>
            <p className='text-lg text-[#6b1e2a] mb-4'>
            Many students face an important decision between Computer Science and Information Technology. 
              While both subjects deal with technology, they approach it from different angles and prepare students 
              for different aspects of the digital world.
            </p>
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='text-3xl font-semibold text-[#7a2531] mb-8 text-center animate-slide-down'>Why Choose IGCSE Technology Subjects?</h2>
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

        <section className='mb-16 animate-fade-in-delay'>
          <h2 className='text-3xl font-semibold text-[#7a2531] mb-8 text-center'>IGCSE Computer Science vs Information Technology</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gradient-to-br from-[#7a2531] to-[#6b1e2a] rounded-lg p-8 hover-lift transition-all duration-300 transform hover:scale-105 border-2 border-[#7a2531] shadow-xl'>
              <h3 className='text-2xl font-semibold text-white mb-6'>IGCSE Computer Science</h3>
              <div className='mb-6'>
                <h4 className='text-lg font-semibold text-white mb-3'>What You&apos;ll Study:</h4>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-red-100'>Programming fundamentals (Python/Pseudocode)</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-red-100'>Algorithms and computational thinking</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-red-100'>Data representation and number systems</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-red-100'>Computer systems and architecture</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-red-100'>Networks and cybersecurity</p>
                  </div>
                </div>
              </div>
              <div className='bg-white bg-opacity-90 rounded-lg p-4 border border-white border-opacity-50 shadow-inner'>
                <h4 className='text-lg font-semibold text-[#7a2531] mb-2'>Best For:</h4>
                <p className='text-[#6b1e2a] text-sm'>Students interested in programming, software development, and understanding how computers work at a fundamental level.</p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg p-8 hover-lift transition-all duration-300 transform hover:scale-105 border-2 border-[#d4af37] shadow-xl'>
              <h3 className='text-2xl font-semibold text-white mb-6'>IGCSE Information Technology</h3>
              <div className='mb-6'>
                <h4 className='text-lg font-semibold text-white mb-3'>What You&apos;ll Study:</h4>
                <div className='space-y-3'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-yellow-100'>Document production and data management</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-yellow-100'>Website authoring and multimedia</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-yellow-100'>Data analysis and modeling</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-yellow-100'>Database design and implementation</p>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-2 h-2 bg-white rounded-full mt-2'></div>
                    <p className='text-yellow-100'>System life cycle and project management</p>
                  </div>
                </div>
              </div>
              <div className='bg-white bg-opacity-90 rounded-lg p-4 border border-white border-opacity-50 shadow-inner'>
                <h4 className='text-lg font-semibold text-[#7a2531] mb-2'>Best For:</h4>
                <p className='text-[#6b1e2a] text-sm'>Students interested in practical technology applications, digital media, and using technology to solve business problems.</p>
              </div>
            </div>
          </div>

          <div className='mt-8 bg-white rounded-lg shadow-lg p-8 border border-[#e8d8da] hover-lift transition-all duration-300'>
            <h3 className='text-2xl font-semibold text-[#7a2531] mb-6 text-center'>Assessment Methods</h3>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h4 className='text-lg font-semibold text-[#7a2531] mb-4'>Computer Science (CIE 0478)</h4>
                <ul className='space-y-2 text-[#6b1e2a]'>
                  <li className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                    <span>Written theory paper (50%)</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                    <span>Programming practical exam (50%)</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-[#7a2531] rounded-full'></span>
                    <span>Focus on algorithmic thinking</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='text-lg font-semibold text-[#7a2531] mb-4'>Information Technology (CIE 0417)</h4>
                <ul className='space-y-2 text-[#6b1e2a]'>
                  <li className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                    <span>Written theory paper (40%)</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                    <span>Practical coursework (60%)</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <span className='w-2 h-2 bg-[#d4af37] rounded-full'></span>
                    <span>Focus on practical applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-16 animate-fade-in-delay'>
          <div className='bg-gradient-to-r from-[#7a2531] to-[#c14242] rounded-lg text-white p-8 hover-lift transition-all duration-300'>
            <h2 className='text-3xl font-semibold mb-6 text-center'>Career Pathways After IGCSE</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-semibold mb-4 text-center'>Computer Science Pathways</h3>
                <div className='space-y-4'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3'>
                      <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
                      </svg>
                    </div>
                    <h4 className='font-semibold mb-2'>Software Development</h4>
                    <p className='text-red-100 text-sm'>A-Level CS → University → Programming careers</p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:scale-110'>
                      <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <h4 className='font-semibold mb-2'>Cybersecurity Specialist</h4>
                    <p className='text-red-100 text-sm'>Strong programming foundation for security roles</p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:scale-110'>
                      <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
                      </svg>
                    </div>
                    <h4 className='font-semibold mb-2'>Data Scientist</h4>
                    <p className='text-red-100 text-sm'>Algorithmic thinking for data analysis</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-semibold mb-4 text-center'>Information Technology Pathways</h3>
                <div className='space-y-4'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:scale-110'>
                      <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' />
                      </svg>
                    </div>
                    <h4 className='font-semibold mb-2'>Digital Media Designer</h4>
                    <p className='text-red-100 text-sm'>Multimedia skills for creative industries</p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:scale-110'>
                      <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
                      </svg>
                    </div>
                    <h4 className='font-semibold mb-2'>Systems Administrator</h4>
                    <p className='text-red-100 text-sm'>Network and database management skills</p>
                  </div>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 hover:scale-110'>
                      <svg className='w-8 h-8' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <h4 className='font-semibold mb-2'>Business Analyst</h4>
                    <p className='text-red-100 text-sm'>Technology solutions for business problems</p>
                  </div>
                </div>
              </div>
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
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-[#7a2531] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6b1e2a] transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Explore Computer Science Resources
            </button>
            <button className='bg-[#d4af37] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'>
              Discover IT Learning Materials
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page