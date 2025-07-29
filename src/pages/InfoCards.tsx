
import CourseEnrollmentForm from '@/components/CourseEnrollmentForm';
import CourseLevelPopup from '@/components/CourseLevelPopup';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCourseActions } from '@/hooks/useCourseActions';
import { ArrowLeft, Award, Code, Coffee, Flame, Pencil, Worm } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoCards = () => {
  const {
    selectedCourse,
    isPopupOpen,
    isEnrollmentOpen,
    selectedLevel,
    handleLearnMore,
    closePopup,
    handleStartLevel,
    closeEnrollment
  } = useCourseActions();

  const infoCards = [

  {
    id: 1,
    icon: Code,
    title: "Web Development",
    description: "Learn to build responsive and dynamic websites from scratch using modern tools and frameworks.",
    details: "Master HTML, CSS, JavaScript, React, Node.js, and full-stack development with real-world projects and deployment best practices.",
    stats: { beginner: "https://docs.google.com/document/d/14gn1cAN2uuvOaUkyc0WtbVyd3bx4-93U/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
       intermediate: "https://docs.google.com/document/d/14gn1cAN2uuvOaUkyc0WtbVyd3bx4-93U/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
        advanced: "https://docs.google.com/document/d/14gn1cAN2uuvOaUkyc0WtbVyd3bx4-93U/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true" },
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Code,
    title: "C Programming",
    description: "Get started with programming by mastering the fundamentals of the C language.",
    details: "Understand C syntax, memory management, pointers, and build small systems-level programs and projects to strengthen problem-solving skills.",
    stats: { beginner: "https://docs.google.com/document/d/1p7de8zYhQbR7V-TawNJ3oTtLGKbUPIO4/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
       intermediate: "https://docs.google.com/document/d/1Hmv7fxcCQh6q7FmRHw2oPZ_jkKAZA28I/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
        advanced: "https://docs.google.com/document/d/1RkcO1mQgSATOWICkZBmrrwxrcKXL98gZ/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true" },
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Code,
    title: "C++ Programming",
    description: "Level up from C with object-oriented programming and advanced C++ concepts.",
    details: "Learn classes, inheritance, polymorphism, STL (Standard Template Library), and apply them in building efficient and scalable software.",
    stats: { beginner: "https://docs.google.com/document/d/1v61cuWozsBQ3zEZKXBqMhOzFXMZx2MZY/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
       intermediate: "https://docs.google.com/document/d/19kUTi1l8coLfl9dMtS7mFGGTGRZWakgk/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
        advanced: "https://docs.google.com/document/d/1PyQ88WXQMrVPpRsX4HV0Y5EvD6SJLp_R/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true" },
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Coffee,
    title: "Java Programming",
    description: "Build robust, cross-platform applications with Java, one of the world’s most popular programming languages.",
    details: "Cover core Java syntax, OOP principles, exception handling, GUIs, and develop desktop or web applications with hands-on practice.",
    stats: { beginner: "https://docs.google.com/document/d/1lO7bEweg0Gb3lBsT2QP2XpUTvBsw7Izi/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
       intermediate: "https://docs.google.com/document/d/1rYWi1xQ5QBpV7jT684ddil3PvszTkpQv/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
        advanced: "https://docs.google.com/document/d/1rXpSopCHPzbeUAOSAQcLe04XuDyYWM9G/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true" },
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: Worm,
    title: "Python Programming",
    description: "Learn Python from basics to advanced, and apply it to solve real-world problems easily.",
    details: "Practice data structures, scripting, file handling, and dive into web development, data analysis, or automation with practical exercises.",
    stats: { beginner: "https://docs.google.com/document/d/1OX_1EVZSyjofNn-8qa57_MfutiOe2Sey/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
       intermediate: "https://docs.google.com/document/d/1Ysf75Rk_j5cOLg9zYw6eNRx3M4uSCRSD/edit?usp=drive_link&ouid=113825413396694463219&rtpof=true&sd=true",
        advanced: "https://docs.google.com/document/d/1PZi_7ZJQkd5LHyeO_Mva4BbFZC-BrgYo/edit?usp=sharing&ouid=113825413396694463219&rtpof=true&sd=true" },
    gradient: "from-indigo-500 to-blue-500"
  }
]


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 font-inter">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                <ArrowLeft size={24} />
                <span className="font-semibold">Home</span>
              </Link>
              <h1 className="text-2xl font-bold font-playfair text-gray-900">Project Information</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive learning paths designed to transform your career and skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <Card 
                key={card.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg overflow-hidden animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleLearnMore(card.title)}
              >
                <CardHeader className="relative pb-4">
                  <div className={`bg-gradient-to-r ${card.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <card.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 font-playfair">
                    {card.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm">
                    {card.details}
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Pencil size={16} className="text-blue-500" />
                      </div>
                      <a href={card.stats.beginner}><div className="text-sm font-semibold text-gray-900"></div></a>
                      <div className="text-xs text-gray-500">Beginner</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Flame size={16} className="text-yellow-500" />
                      </div>
                      <a href={card.stats.intermediate}><div className="text-sm font-semibold text-gray-900"></div></a>
                      <div className="text-xs text-gray-500">Intermediate</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award size={16} className="text-green-500" />
                      </div>
                      <a href={card.stats.advanced}><div className="text-sm font-semibold text-gray-900"></div></a>
                      <div className="text-xs text-gray-500">Advanced</div>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(card.title);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Learn More
                  </button>
                </CardContent>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Popups */}
      <CourseLevelPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        courseTitle={selectedCourse || ''}
        onStartLevel={handleStartLevel}
      />

      <CourseEnrollmentForm
        isOpen={isEnrollmentOpen}
        onClose={closeEnrollment}
        courseTitle={selectedCourse || ''}
        level={selectedLevel}
      />
    </>
  );
};

export default InfoCards;
