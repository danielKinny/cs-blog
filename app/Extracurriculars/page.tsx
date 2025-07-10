"use client";

import { useEffect, useState } from "react";

type Activity = {
  title: string;
  date: string;
  description: string;
};

type Subject = {
  name: string;
  activities: Activity[];
};

const mockData: Subject[] = [
  {
    name: "Mathematics",
    activities: [
      {
        title: "Inter-School Math Olympiad",
        date: "2025-08-12",
        description: "A competition focusing on algebra and geometry problems.",
      },
      {
        title: "Math Workshop by MIT",
        date: "2025-08-30",
        description: "Online workshop hosted by MIT professors.",
      },
    ],
  },
  {
    name: "Computer Science",
    activities: [
      {
        title: "Hackathon: Build the Future",
        date: "2025-09-01",
        description: "24-hour coding challenge for web & AI.",
      },
    ],
  },
  {
    name: "Biology",
    activities: [
      {
        title: "Genetics Research Talk",
        date: "2025-08-20",
        description: "Insights into modern genetics and DNA engineering.",
      },
    ],
  },
];

export default function ExtraCurricularPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    // Simulating cloud fetch
    setSubjects(mockData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Extracurricular Activities</h1>
      <p className="mb-6">Stay updated with all subject-wise events and opportunities!</p>

      {subjects.map((subject) => (
        <div key={subject.name} className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-semibold text-blue-700">{subject.name}</h2>
          <ul className="ml-4 mt-2">
            {subject.activities.map((activity, index) => (
              <li key={index} className="mb-2">
                <h3 className="font-semibold">{activity.title}</h3>
                <p className="text-sm text-gray-700">{activity.date}</p>
                <p>{activity.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}