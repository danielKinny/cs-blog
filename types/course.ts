export interface Course {
  courseID: string;
  title: string;
  description: string;
  provider: string;
  category: string;
  url: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating?: number;
  students?: number;
}
