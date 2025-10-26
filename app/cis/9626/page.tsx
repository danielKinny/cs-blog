import React from "react";
import {
  GlobeAltIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-8">
      <div className="my-8">
        <div className="text-red-900 bg-white p-10 rounded-2xl text-center w-[420px] shadow-xl">
          <h1 className="mb-8 p-4 text-5xl font-extrabold border-b-2 rounded-lg ">Resources</h1>

          <Image
            src="/9626tb.jpg"
            width={380}
            height={380}
            alt="Information Technology Textbook Cover"
            className="mx-auto mb-6 rounded-xl shadow-2xl"
            priority
          />
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-information-technology-9626/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeAltIcon className="h-7 w-7 mr-3" />
            Cambridge Official Website
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpastpapers.papacambridge.com%2Fpapers%2Fcaie%2Fas-and-a-level-information-technology-9626&data=05%7C02%7Cdanielvalent.k_cis%40gemsed.com%7Cbc0c2c9f0d764c46a37b08dde919d0c9%7Cd2b3a7dcd57e417f90ad149b872e9aa1%7C1%7C0%7C638923019265787152%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=7SF4sgi%2Bxl48zyMz0k%2F9f5LDFDs4lS84dFDYAa7M%2Bok%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilmIcon className="h-7 w-7 mr-3" />
            Past Papers
          </a>
        </div>
      </div>

      <div className="text-red-900 bg-white flex flex-col items-center p-4 rounded-xl py-8 my-20">
        <h1 className="text-4xl font-extrabold mt-2 mb-4 tracking-tight drop-shadow-sm">
          A-Level Information Technology 9626
        </h1>
        <div className="mt-4 p-8 mx-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-200 shadow-xl max-w-2xl w-full transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-400 rounded-full mr-2"></span>
            Syllabus Overview
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Cambridge International AS &amp; A Level Information Technology develops
            practical IT skills and knowledge that are highly valued by employers and
            higher education institutions. The course focuses on the effective use of
            technology to solve real-world problems through databases, spreadsheets,
            document production, website authoring, and project management.
          </p>
          <p className="mb-2 text-lg leading-relaxed text-gray-800">
            Learners develop problem-solving, analytical, and design skills while
            working on practical projects. The course emphasizes understanding user
            requirements, designing appropriate solutions, implementing them using
            industry-standard software, and testing outcomes. Students also explore
            the social, ethical, and economic impact of information technology in
            modern society.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2 text-red-700">Assessment Overview</h3>
            <p className="mb-4 text-base text-gray-800">At AS Level candidates take papers 1 and 2. At A Level candidates take all four papers.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 1 - Theory</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 45 minutes</li>
                  <li>70 marks</li>
                  <li>Candidates answer all questions</li>
                  <li>Questions based on sections 1–11 of the subject content</li>
                  <li>Externally assessed</li>
                  <li>50% of the AS Level / 25% of the A Level</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 3 - Advanced Theory</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 45 minutes</li>
                  <li>70 marks</li>
                  <li>Candidates answer all questions</li>
                  <li>Questions based on sections 12–21 of the subject content</li>
                  <li>Externally assessed</li>
                  <li>25% of the A Level</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 2 - Practical</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>2 hours 30 minutes</li>
                  <li>90 marks</li>
                  <li>Candidates answer all questions</li>
                  <li>Tasks based on sections 8–11 of the subject content</li>
                  <li>Candidates apply knowledge and understanding from sections 1–7</li>
                  <li>Externally assessed</li>
                  <li>50% of the AS Level / 25% of the A Level</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 4 - Advanced Practical</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>2 hours 30 minutes</li>
                  <li>90 marks</li>
                  <li>Candidates answer all questions</li>
                  <li>Tasks based on sections 17–21 of the subject content</li>
                  <li>Candidates apply knowledge and understanding of all subject content</li>
                  <li>May include practical tasks from sections 8–10 within a problem-solving context</li>
                  <li>Externally assessed</li>
                  <li>25% of the A Level</li>
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
