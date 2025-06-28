"use client";
import { useState } from 'react';
import { Course } from '../../types/course';

interface SearchableCourseListProps {
  courses: Course[];
}

export default function SearchableCourseList({ courses }: SearchableCourseListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = searchTerm
    ? courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : courses;

  return (
    <>
      <div className="animate-fade-in-delay">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search courses by name, provider, category, or description..."
          className="w-full text-black mx-auto mb-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105 focus:scale-105"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-left opacity-0"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold text-black mb-3 line-clamp-2">
                {course.title}
              </h3>
              
              <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                {course.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">
                    {course.provider}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                    {course.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>⏱️ {course.duration}</span>
                    <span>📊 {course.level}</span>
                  </div>
                </div>
                
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block font-medium"
                >
                  View Course →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && courses.length > 0 && (
        <div className="text-center py-12 animate-fade-in">
          <p className="text-black text-lg">No courses found matching "{searchTerm}"</p>
          <p className="text-gray-600 text-sm mt-2">Try searching with different keywords</p>
        </div>
      )}

      {courses.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <div className="animate-pulse-slow">
            <p className="text-black text-lg">Loading courses...</p>
          </div>
        </div>
      )}
    </>
  );
}
