
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  technologies: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 1200,
    rating: 4.8,
    level: "Intermediate",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Create stunning mobile apps for iOS and Android using React Native and modern development practices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    duration: "10 weeks",
    students: 850,
    rating: 4.9,
    level: "Beginner",
    technologies: ["React Native", "Firebase", "JavaScript", "Expo"]
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    description: "Learn design principles, user research, prototyping, and create beautiful user interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    duration: "8 weeks",
    students: 650,
    rating: 4.7,
    level: "Beginner",
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
  },
  {
    id: 4,
    title: "Data Science & Analytics",
    description: "Dive into data analysis, machine learning, and visualization to make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    duration: "14 weeks",
    students: 920,
    rating: 4.6,
    level: "Advanced",
    technologies: ["Python", "Pandas", "TensorFlow", "Jupyter"]
  }
];
