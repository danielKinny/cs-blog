import React from "react";
import Link from "next/link";
import { getAllCourses } from '@/lib/course';
import SearchableCourseList from './SearchableCourseList';

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fef2f2'}}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 animate-slide-down" style={{color: '#7a2531'}}>
            Recommended Courses
          </h1>
          <p className="text-xl animate-slide-up max-w-3xl mx-auto" style={{color: '#6b1e2a'}}>
            Expand your knowledge with these carefully curated courses from industry-leading platforms. 
            Whether you&apos;re just starting or looking to advance your skills, we&apos;ve got something for everyone.
          </p>
        </header>

        <SearchableCourseList courses={courses} />

        <div className="mt-12 text-center animate-fade-in-delay">
          <div className="bg-white rounded-lg shadow-lg border p-8" style={{borderColor: '#e8d8da'}}>
            <h3 className="text-2xl font-semibold mb-4" style={{color: '#7a2531'}}>
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p className="mb-6" style={{color: '#6b1e2a'}}>
              We&apos;re constantly adding new courses and resources. Check our blog for the latest updates 
              and course recommendations, or reach out to us with suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}