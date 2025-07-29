
import { courses } from '@/data/coursesData';
import { useCourseActions } from '@/hooks/useCourseActions';
import CourseCard from './CourseCard';
import CourseEnrollmentForm from './CourseEnrollmentForm';
import CourseLevelPopup from './CourseLevelPopup';

const Courses = () => {
  const {
    isCoursePage,
    selectedCourse,
    isPopupOpen,
    isEnrollmentOpen,
    selectedLevel,
    handleLearnMore,
    closePopup,
    handleStartLevel,
    closeEnrollment
  } = useCourseActions();

  return (
    <>
      <section id="courses" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
              Enhance your skills with comprehensive courses designed by industry experts acorss platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                isCoursePage={isCoursePage}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/courses"><button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
            View All Courses
          </button></a>
        </div>
      </section>

      {/* Always render popups but control visibility through isOpen props */}
      <CourseLevelPopup 
        isOpen={isPopupOpen && isCoursePage}
        onClose={closePopup}
        courseTitle={selectedCourse || ''}
        onStartLevel={handleStartLevel}
      />

      <CourseEnrollmentForm
        isOpen={isEnrollmentOpen && isCoursePage}
        onClose={closeEnrollment}
        courseTitle={selectedCourse || ''}
        level={selectedLevel}
      />
    </>
  );
};

export default Courses;
