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
          <h1 className="mb-8 p-4 text-5xl font-extrabold border-b-2 rounded-lg ">Resources</h1>

          <Image
            src="/9618tb.jpg"
            width={380}
            height={380}
            alt="Textbook Cover"
            className="mx-auto mb-6 rounded-xl shadow-2xl"
            priority
          />
          <a
            className="text-red-900 cursor-pointer flex rounded-lg font-bold text-xl border-y p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white"
            href="/cstb.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DocumentIcon className="h-7 w-7 mr-3" />
            Computer Science Textbook
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeAltIcon className="h-7 w-7 mr-3" />
            Cambridge Official Website
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpastpapers.papacambridge.com%2Fpapers%2Fcaie%2Fas-and-a-level-computer-science-for-first-examination-in-2021-9618Useful&data=05%7C02%7Cdanielvalent.k_cis%40gemsed.com%7C6a67e100e29541eb332f08ddeb9e95eb%7Cd2b3a7dcd57e417f90ad149b872e9aa1%7C1%7C0%7C638925788571848627%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=qW3UXDMMtrZSuZQ%2BDMTcpHAinb3HtMy61PD0KoiCGsg%3D&reserved=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FilmIcon className="h-7 w-7 mr-3" />
            Past Papers
          </a>
          <a
            className="text-red-900 cursor-pointer font-bold text-xl flex border-y rounded-lg p-4 duration-100 hover:bg-[#7a2531] transition-all hover:text-white mt-3"
            href="https://gemsedu-my.sharepoint.com/personal/l_kurian_cis_gemsedu_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fl%5Fkurian%5Fcis%5Fgemsedu%5Fcom%2FDocuments%2FLeni%2FCIS%202023%2D24%2FICT%20Department%2FICT%20and%20CS%20Resources%2F9618%20CS%2FA%20level%2FExam%20style%20question%20answers&ct=1757396594048&or=OWA%2DNT%2DMail&cid=ed253858%2D527e%2Defd0%2Dd768%2Db45c0634966d&ga=1&LOF=1"
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
          A-Level Computer Science 9618
        </h1>
        <div className="mt-4 p-8 mx-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-200 shadow-xl max-w-2xl w-full transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-400 rounded-full mr-2"></span>
            Syllabus Overview
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Cambridge International AS &amp; A Level Computer Science encourages
            learners to meet the needs of higher education courses in computer
            science as well as twenty-first century digital employers. It
            encourages leaders to think creatively, through applying practical
            programming solutions, demonstrating that they are effective uses of
            technology.
          </p>
          <p className="mb-2 text-lg leading-relaxed text-gray-800">
            Learners develop computational thinking &amp; programming skills to
            solve computer science problems. Cambridge International AS and A
            Level Computer Science will help learners develop a range of skills
            such as thinking creatively, analytically, logically and critically.
            They will also be able to appreciate the ethical issues that arise
            with current and emerging computing technologies.
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2 text-red-700">Assessment Overview</h3>
            <p className="mb-4 text-base text-gray-800">At AS Level candidates take papers 1 and 2. At A Level candidates take all four papers. Calculators must <span className="font-bold">not</span> be used in any paper.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 1 Theory Fundamentals</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 30 minutes, 75 marks</li>
                  <li>Assesses sections 1 to 8 of the syllabus content</li>
                  <li>Written paper, all questions, 50% AS, 25% A Level</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 3 Advanced Theory</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>1 hour 30 minutes, 75 marks</li>
                  <li>Assesses sections 13 to 20 of the syllabus content</li>
                  <li>Written paper, all questions, 25% A Level</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 2 Problem-solving & Programming</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>2 hours, 75 marks</li>
                  <li>Assesses sections 9 to 12 of the syllabus content</li>
                  <li>Pseudocode, written paper, all questions, 50% AS, 25% A Level</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-base">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Paper 4 Practical</h4>
                <ul className="list-disc ml-6 text-gray-800">
                  <li>2 hours 30 minutes, 75 marks</li>
                  <li>Assesses sections 19 to 20 (except low-level/declarative)</li>
                  <li>Code & testing, Java/VB/Python, all questions, 25% A Level</li>
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
