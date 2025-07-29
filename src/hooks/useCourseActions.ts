
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCourseActions = () => {
  const location = useLocation();
  const isCoursePage = location.pathname === '/info';
  
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  const handleLearnMore = (courseTitle: string) => {
    console.log('handleLearnMore called:', { courseTitle, isCoursePage, pathname: location.pathname });
    if (isCoursePage) {
      setSelectedCourse(courseTitle);
      setIsPopupOpen(true);
      console.log('Popup should open now for:', courseTitle);
    }
  };

  const closePopup = () => {
    console.log('Closing popup');
    setIsPopupOpen(false);
    setSelectedCourse(null);
  };

  const handleStartLevel = (level: string) => {
    console.log('Starting level:', level);
    setSelectedLevel(level);
    setIsPopupOpen(false);
    setIsEnrollmentOpen(true);
  };

  const closeEnrollment = () => {
    console.log('Closing enrollment form');
    setIsEnrollmentOpen(false);
    setSelectedLevel('');
  };

  return {
    isCoursePage,
    selectedCourse,
    isPopupOpen,
    isEnrollmentOpen,
    selectedLevel,
    handleLearnMore,
    closePopup,
    handleStartLevel,
    closeEnrollment
  };
};
