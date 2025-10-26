import React from "react";
import {
  DocumentIcon,
  GlobeAltIcon,
  FilmIcon,
  VariableIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-8">
      <div className="my-8">
        <div className="text-red-900 bg-white p-10 rounded-2xl text-center w-[420px] shadow-xl">
          <h1 className="mb-8 p-4 text-5xl font-extrabold border-b-2 rounded-lg ">
            Resources
          </h1>

          <Image
            src="/0478tb.jpg"
            width={380}
            height={380}
            alt="Textbook Cover"
            className="mx-auto mb-6 rounded-xl shadow-2xl"
            priority
          />
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-computer-science-0478/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeAltIcon className="h-7 w-7 mr-3" />
            Cambridge Official Website
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://pastpapers.papacambridge.com/papers/caie/igcse-computer-science-0478"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilmIcon className="h-7 w-7 mr-3" />
            Past Papers
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://papersbytopic.com/gcse/computer-science-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VariableIcon className="h-7 w-7 mr-3" />
            Exam-style Questions
          </a>
        </div>
      </div>

      <div className="text-red-900 bg-white flex flex-col items-center p-4 rounded-xl py-8 my-20">
        <h1 className="text-4xl font-extrabold mt-2 mb-4 tracking-tight drop-shadow-sm">
          IGCSE Computer Science 0478
        </h1>
        <div className="mt-4 p-8 mx-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-200 shadow-xl max-w-2xl w-full transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-400 rounded-full mr-2"></span>
            Syllabus Overview
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Cambridge IGCSE Computer Science helps learners develop an interest
            in computational thinking and an understanding of the principles of
            problem-solving using computers. They apply this understanding to
            create computer-based solutions to problems using algorithms and a
            high-level programming language. Learners also develop a range of
            technical skills, and the ability to effectively test and evaluate
            computing solutions.
          </p>
          <p className="mb-2 text-lg leading-relaxed text-gray-800">
            Studying Cambridge IGCSE Computer Science helps learners appreciate
            current and emerging computing technologies, the benefits of their
            use and recognise their potential risks. It provides an ideal
            foundation for progression to Cambridge International AS &amp; A
            Level and is valuable for other areas of study and everyday life.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2 text-red-700">
              Assessment Overview
            </h3>
            <p className="mb-4 text-base text-gray-800">
              All candidates take two papers. Calculators must{" "}
              <span className="font-bold">not</span> be used in any paper.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">
                  Paper 1 Computer Systems
                </h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 45 minutes, 75 marks</li>
                  <li>
                    Written paper with short-answer and structured questions
                  </li>
                  <li>50% of total marks</li>
                  <li>Externally assessed</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">
                  Paper 2 Algorithms, Programming and Logic
                </h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 45 minutes, 75 marks</li>
                  <li>
                    Written paper with short-answer and structured questions
                  </li>
                  <li>50% of total marks</li>
                  <li>Externally assessed</li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
