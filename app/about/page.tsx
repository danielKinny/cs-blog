import React from "react";
import Image from "next/image";

export function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-16">
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#7a2531] mb-2 text-center">
              About the Founders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7a2531] to-[#d4af37] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 w-full">
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
                  uncovering the "how" behind the "wow." In my free time,
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

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex-shrink-0 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#c14242] via-[#7a2531] to-[#d4af37] rounded-full opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#c14242]/10 to-[#7a2531]/10 rounded-full p-4">
                  <Image
                    src="/danny.JPG"
                    alt="Daniel Kinny"
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
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
      </div>
    </div>
  );
}

export default Page;
