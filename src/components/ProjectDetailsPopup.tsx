import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Code, ExternalLink, Star, Tag, Users, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Course {
  id: number;
  name: string;
  description: string;
  provider: string;
  url: string;
  platform_name: string;
  difficulty: string;
  duration: string;
  students: number;
  rating: number;
  color: string;
  modules: string[];
}

interface ProjectDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  domain: string;
}

const ProjectDetailsPopup: React.FC<ProjectDetailsPopupProps> = ({
  isOpen,
  onClose,
  projectTitle,
  domain,
}) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const fetchDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/courses/${domain}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setCourses(data.courses);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDetails();
  }, [isOpen, domain]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-playfair">
                {projectTitle}
              </h2>
              <p className="text-gray-600 mt-2">Available Courses</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`bg-gradient-to-r ${course.color} w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Code className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 font-playfair">
                    {course.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      Course Modules:
                    </h4>
                    {course.modules && course.modules.length > 0 ? (
                      course.modules.map((mod, idx) => (
                        <div
                          key={`${course.id}-${idx}`}
                          className="flex items-center gap-2"
                        >
                          <Tag size={12} className="text-blue-500" />
                          <span className="text-xs text-gray-600">{mod}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-400">No modules found</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users size={14} className="text-blue-500" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {course.students}
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star size={14} className="text-yellow-500" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {course.rating}
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{course.duration}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.difficulty === 'Beginner'
                          ? 'bg-green-100 text-green-800'
                          : course.difficulty === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {course.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 pt-1">
                    Platform: <strong>{course.platform_name}</strong>
                  </p>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={course.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-sm text-center"
                    >
                      Start Learning
                    </a>
                    <a
                      href={course.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </CardContent>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPopup;
