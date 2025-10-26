import React from "react";
import {
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
          <h1 className="mb-8 p-4 text-5xl font-extrabold border-b-2 rounded-lg ">Resources</h1>

          <Image
            src="/0417tb.jpg"
            width={380}
            height={380}
            alt="Textbook Cover"
            className="mx-auto mb-6 rounded-xl shadow-2xl"
            priority
          />
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-information-and-communication-technology-0417/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeAltIcon className="h-7 w-7 mr-3" />
            Cambridge Official Website
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpastpapers.papacambridge.com%2Fpapers%2Fcaie%2Figcse-ict0417&data=05%7C02%7Cdanielvalent.k_cis%40gemsed.com%7C5e35b54c2bc54a6eda0508dde9199772%7Cd2b3a7dcd57e417f90ad149b872e9aa1%7C1%7C0%7C638923018594368248%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=pCbr%2B4tPOvXQliWtp0DDECmnatyipnlFCOCaYDxFZQo%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilmIcon className="h-7 w-7 mr-3" />
            Past Papers
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCKA7HMB3XnOcWFQHdyh2vng%2Fvideos&data=05%7C02%7Cdanielvalent.k_cis%40gemsed.com%7C5e35b54c2bc54a6eda0508dde9199772%7Cd2b3a7dcd57e417f90ad149b872e9aa1%7C1%7C0%7C638923018594388695%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=d28coE%2B2pBmLX0vxOohQNCfuULm%2BqjJg15rh%2FUVFg88%3D&reserved=0"
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
          IGCSE Information Communication Technology 0417
        </h1>
        <div className="mt-4 p-8 mx-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-200 shadow-xl max-w-2xl w-full transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-400 rounded-full mr-2"></span>
            Syllabus Overview
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Cambridge IGCSE Information and Communication Technology (ICT) 0417 equips learners with essential digital skills for the modern world. The syllabus covers a broad range of ICT topics, including practical use of common software applications, understanding of computer systems, networks, and the impact of technology on society.
          </p>
          <p className="mb-2 text-lg leading-relaxed text-gray-800">
            Students develop practical skills in word processing, spreadsheets, databases, presentations, and web authoring, as well as a theoretical understanding of ICT concepts. The course encourages critical thinking about the ethical, legal, and social implications of ICT, preparing learners for further study and the demands of a technology-driven workplace.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2 text-red-700">Assessment Overview</h3>
            <p className="mb-4 text-base text-gray-800">At AS Level candidates take papers 1 and 2. At A Level candidates take all four papers. Calculators must <span className="font-bold">not</span> be used in any paper.</p>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 1</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 30 minutes, 75 marks</li>
                  <li>80 Marks</li>
                  <li>Written paper (Theory)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 2</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>2 hour 15 minutes</li>
                  <li>70 Marks</li>
                  <li>Practical paper (Document Production, Databases, Presentations)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 3</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>2 hours 15 minutes</li>
                  <li>70 Marks</li>
                  <li>Practical paper (Spreadsheets and Website Authoring)</li>
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
