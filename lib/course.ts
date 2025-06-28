import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: 'wordpress-website',
    title: 'Build a Full Website using WordPress',
    description: 'Learn to create a complete website using WordPress, one of the most popular content management systems. Perfect for beginners who want to build professional websites without coding.',
    provider: 'Coursera',
    category: 'Web Development',
    url: 'https://www.coursera.org/projects/build-a-full-website-using-wordpress',
    duration: '2 hours',
    level: 'Beginner',
    rating: 4.5,
    students: 15000
  },
  {
    id: 'cryptocurrency',
    title: 'Cryptocurrency',
    description: 'Dive deep into the world of cryptocurrency, blockchain technology, and digital assets. Understand how cryptocurrencies work and their impact on the financial world.',
    provider: 'Coursera',
    category: 'Finance & Technology',
    url: 'https://www.coursera.org/learn/cryptocurrency',
    duration: '4 weeks',
    level: 'Intermediate',
    rating: 4.3,
    students: 25000
  },
  {
    id: 'cybersecurity-foundations',
    title: 'Foundations of Cybersecurity',
    description: 'Learn the fundamentals of cybersecurity including threat detection, risk management, and security protocols. Essential for anyone interested in protecting digital assets.',
    provider: 'Coursera',
    category: 'Cybersecurity',
    url: 'https://www.coursera.org/learn/foundations-of-cybersecurity',
    duration: '6 weeks',
    level: 'Beginner',
    rating: 4.7,
    students: 45000
  },
  {
    id: 'python-data-science',
    title: 'Python for Applied Data Science and AI',
    description: 'Master Python programming for data science applications and artificial intelligence. Learn data analysis, visualization, and machine learning fundamentals.',
    provider: 'Coursera',
    category: 'Data Science',
    url: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
    duration: '5 weeks',
    level: 'Intermediate',
    rating: 4.6,
    students: 35000
  },
  {
    id: 'mobile-app-developer',
    title: 'IBM iOS and Android Mobile App Developer Professional Certificate',
    description: 'Comprehensive program covering both iOS and Android mobile app development. Learn to build native mobile applications with industry-standard tools and frameworks.',
    provider: 'Coursera',
    category: 'Mobile Development',
    url: 'https://www.coursera.org/professional-certificates/ibm-ios-android-mobile-app-developer-pc',
    duration: '6 months',
    level: 'Advanced',
    rating: 4.4,
    students: 20000
  }
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter(course => 
    course.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCoursesByProvider(provider: string): Course[] {
  return courses.filter(course => 
    course.provider.toLowerCase() === provider.toLowerCase()
  );
}

export function getCoursesByLevel(level: string): Course[] {
  return courses.filter(course => 
    course.level.toLowerCase() === level.toLowerCase()
  );
}

export function searchCourses(query: string): Course[] {
  const searchTerm = query.toLowerCase();
  return courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm) ||
    course.description.toLowerCase().includes(searchTerm) ||
    course.category.toLowerCase().includes(searchTerm) ||
    course.provider.toLowerCase().includes(searchTerm)
  );
}

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
