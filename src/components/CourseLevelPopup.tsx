
import React from 'react';
import { X, BookOpen, Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CourseLevelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  onStartLevel: (level: string) => void;
}

const CourseLevelPopup: React.FC<CourseLevelPopupProps> = ({ 
  isOpen, 
  onClose, 
  courseTitle, 
  onStartLevel 
}) => {
  if (!isOpen) return null;

  const courseLevels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'Perfect for those just starting their journey. No prior experience needed.',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600',
      duration: '4-6 weeks',
      projects: '3-5 projects',
      features: ['Basic concepts', 'Step-by-step guidance', 'Community support', 'Certificate of completion']
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Build upon your existing knowledge and tackle more complex challenges.',
      icon: Target,
      color: 'from-blue-500 to-indigo-600',
      duration: '6-8 weeks',
      projects: '5-8 projects',
      features: ['Advanced techniques', 'Real-world projects', 'Code reviews', 'Industry best practices']
    },
    {
      id: 'advanced',
      title: 'Advanced',
      description: 'Master the most challenging concepts and become an expert.',
      icon: Trophy,
      color: 'from-purple-500 to-pink-600',
      duration: '8-12 weeks',
      projects: '8-12 projects',
      features: ['Expert-level content', 'Complex architectures', 'Mentorship', 'Job placement assistance']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto">
        <Button
          onClick={onClose}
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          <X size={20} />
        </Button>

        <div className="text-center mb-8 animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-playfair">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-300 font-inter">
            {courseTitle} - Select the level that matches your experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courseLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <Card 
                key={level.id}
                className="group relative bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold font-playfair group-hover:text-blue-300 transition-colors">
                    {level.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm font-inter">
                    {level.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Duration: {level.duration}</span>
                    <span>{level.projects}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">What you'll learn:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {level.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => onStartLevel(level.title)}
                    className={`w-full bg-gradient-to-r ${level.color} hover:scale-105 transition-all duration-300 font-semibold`}
                  >
                    Start {level.title} Level
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseLevelPopup;
