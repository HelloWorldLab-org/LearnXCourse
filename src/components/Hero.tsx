
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="text-yellow-500" size={20} />
                <span className="text-sm font-medium text-gray-700 font-inter">Welcome to the Future</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-playfair">
              LearnXCourse,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                We're Here to Help
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-inter">
              At LearnXCourse, we provide innovative solutions and exceptional service
              to help your knowledge thrive in the digital age. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 font-inter">
                  Explore Courses
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link to="/info">
                <button className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1 font-inter">
                  <Play size={20} className="transition-transform group-hover:scale-110" />
                  View Projects
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in animate-float" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500 animate-glow">
                <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center z-10">
                    <div className="text-6xl font-bold mb-4 animate-bounce">🌍</div>
                    <div className="text-2xl font-semibold mb-2 font-playfair">Hello World</div>
                    <div className="text-sm opacity-90 font-inter">Innovation Starts Here</div>
                  </div>
                  
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="border border-white/30 animate-pulse"
                          style={{ animationDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '2s' }}></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
