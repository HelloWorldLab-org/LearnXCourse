
import { Award, Heart, Target, TrendingUp, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and collaborative innovation.",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project and user interaction.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our focus is on delivering measurable results that matter to your projects.",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about technology and helping our user succeed.",
      color: "text-red-600"
    }
  ];

  const stats = [
    { number: "5+", label: "Domains Covered", icon: TrendingUp },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "2+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support", icon: Zap }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About LearnXCourse</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a team of passionate developers, designers, and digital strategists committed to 
              delivering exceptional solutions. Our mission is to help You thrive your knowledge in this digital age
              and achieve your goals through innovative technology and creative thinking.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${value.color} bg-gray-50 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
