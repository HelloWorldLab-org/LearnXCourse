
import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirst(false);
      setShowSecond(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 5500);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 6300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center relative z-10">
        {showFirst && (
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-8 font-playfair">
              {'hello world lab'.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards',
                    animationDuration: '0.6s'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            
            <div className="flex justify-center items-center">
              <h1 className='text-4xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400'>Hello world Lab</h1>
            </div>
          </div>
        )}
        
        {showSecond && (
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-8 font-playfair">
              Building One Project At a time
            </h2>
            
            <div className="flex justify-center items-center mt-8">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-transparent border-t-blue-400 border-r-purple-400"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingAnimation;
