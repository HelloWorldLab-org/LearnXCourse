
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Course } from '@/data/coursesData';
import { Clock, Star, Users } from 'lucide-react';
import React from 'react';

interface CourseCardProps {
  course: Course;
  index: number;
  isCoursePage: boolean;
  onLearnMore: (courseTitle: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  index, 
  isCoursePage, 
  onLearnMore 
}) => {
  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
        <div className="absolute top-4 right-4">
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {course.title}
        </CardTitle>
        <p className="text-gray-600 text-sm leading-relaxed">
          {course.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {course.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default CourseCard;
