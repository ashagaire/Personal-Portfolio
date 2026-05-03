interface EducationProps {
  id: number;
  date: string;
  title: string;
  from: string;
  description: string;
}

export const educationList: EducationProps[] = [
  {
    id: 1,
    date: "2014 - 2019",
    title:
      "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
    from: "Tribhuvan University, Nepal",
    description: "bachelorDegreeExplanation",
  },
  {
    id: 2,
    date: "03.2024 - 09.2024",
    title: "bearitCourseName",
    from: "BearIT Oy, Tampere Finland",
    description: "bearitExperienceExplanation",
  },
  {
    id: 3,
    date: "09.2025 - 12.2025",
    title: "2025 Autumn Courses on Software Engineering",
    from: "OpenCS Aalto University",
    description: "autumCourseExperienceExplanation",
  },
];
