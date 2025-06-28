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
          className="w-full mx-auto mb-8 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 bg-white transform transition-all duration-300 hover:scale-105 focus:scale-105"
          style={{color: '#7a2531', borderColor: '#e8d8da'}}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={course.courseID}
            className="bg-white rounded-lg shadow-lg border p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left opacity-0"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards',
              borderColor: '#e8d8da'
            }}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-3 line-clamp-2" style={{color: '#7a2531'}}>
                {course.title}
              </h3>
              
              <p className="mb-4 flex-grow line-clamp-3" style={{color: '#6b1e2a'}}>
                {course.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 rounded-md font-medium" style={{backgroundColor: '#fef2f2', color: '#7a2531'}}>
                    {course.provider}
                  </span>
                  <span className="px-2 py-1 rounded-md text-xs" style={{backgroundColor: '#fef9e7', color: '#d4af37'}}>
                    {course.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm" style={{color: '#8b2635'}}>
                    <span>⏱️ {course.duration}</span>
                    <span>📊 {course.level}</span>
                  </div>
                </div>
                
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white py-2 px-4 rounded-lg hover:opacity-90 transition-colors duration-200 text-center block font-medium shadow-lg"
                  style={{backgroundColor: '#7a2531'}}
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
          <p className="text-lg" style={{color: '#7a2531'}}>
            No courses found matching&nbsp;
            <span style={{wordBreak: 'break-all'}}>
              {searchTerm.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </span>
          </p>
          <p className="text-sm mt-2" style={{color: '#8b2635'}}>Try searching with different keywords</p>
        </div>
      )}

      {courses.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <div className="animate-pulse-slow">
            <p className="text-lg" style={{color: '#7a2531'}}>Loading courses...</p>
          </div>
        </div>
      )}
    </>
  );
}
