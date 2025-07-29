import ProjectDetailsPopup from '@/components/ProjectDetailsPopup.tsx';
import ProjectSearch from '@/components/ProjectSearch.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Search, Tag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  gradient: string;
}

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
 {
    "id": 1,
    "title": "Web Application",
    "description": "Modern responsive web applications for any industry.",
    "longDescription": "Build scalable and performant web applications with modern frameworks and best practices.",
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
    "technologies": ["React", "Node.js", "Express", "MongoDB"],
    "category": "Web Application",
    "gradient": "from-blue-500 to-cyan-500"
  },
  {
    "id": 2,
    "title": "Mobile Application",
    "description": "Cross-platform mobile apps for iOS and Android.",
    "longDescription": "Develop mobile applications that deliver native performance and a smooth user experience.",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
    "technologies": ["React Native", "Flutter", "Firebase"],
    "category": "Mobile Application",
    "gradient": "from-purple-500 to-pink-500"
  },
  {
    "id": 3,
    "title": "Data Science",
    "description": "Data-driven insights for better decision making.",
    "longDescription": "Use machine learning and data analysis to uncover patterns and predict outcomes.",
    "image": "https://plus.unsplash.com/premium_photo-1664297950425-99a968926a74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    "technologies": ["Python", "TensorFlow", "Pandas"],
    "category": "Data Science",
    "gradient": "from-green-500 to-emerald-500"
  },
  {
    "id": 4,
    "title": "Blockchain",
    "description": "Decentralized apps and smart contracts.",
    "longDescription": "Build secure blockchain solutions for finance, supply chain, or identity management.",
    "image": "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["Ethereum", "Solidity", "Web3.js"],
    "category": "Blockchain",
    "gradient": "from-yellow-500 to-orange-500"
  },
  {
    "id": 5,
    "title": "IoT",
    "description": "Connect devices and sensors for smart systems.",
    "longDescription": "Internet of Things solutions for home automation, industry, and wearables.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlvdHxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["Raspberry Pi", "Arduino", "MQTT"],
    "category": "IoT",
    "gradient": "from-red-500 to-pink-500"
  },
  {
    "id": 6,
    "title": "Cybersecurity",
    "description": "Protect systems and data from cyber threats.",
    "longDescription": "Implement strong security practices, monitoring, and incident response.",
    "image": "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    "technologies": ["Nmap", "Wireshark", "Kali Linux"],
    "category": "Cybersecurity",
    "gradient": "from-gray-800 to-blue-800"
  },
  {
    "id": 7,
    "title": "Cloud Computing",
    "description": "Scale apps and services with the cloud.",
    "longDescription": "Deploy and manage applications on cloud platforms for reliability and performance.",
    "image": "https://images.unsplash.com/photo-1667984390533-64bdefe719ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    "technologies": ["AWS", "Azure", "Docker"],
    "category": "Cloud Computing",
    "gradient": "from-indigo-500 to-blue-500"
  },
  {
    "id": 8,
    "title": "AR/VR",
    "description": "Augmented and Virtual Reality experiences.",
    "longDescription": "Create immersive applications for entertainment, training, or education.",
    "image": "https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFyJTIwdnJ8ZW58MHx8MHx8fDA%3D",
    "technologies": ["Unity", "Unreal Engine", "C#"],
    "category": "AR/VR",
    "gradient": "from-purple-700 to-violet-500"
  },
  {
    "id": 9,
    "title": "Big Data",
    "description": "Analyze and process massive datasets.",
    "longDescription": "Use big data tools to gain insights and handle high-volume data streams.",
    "image": "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlnJTIwZGF0YXxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["Hadoop", "Spark", "Kafka"],
    "category": "Big Data",
    "gradient": "from-pink-500 to-rose-500"
  },
  {
    "id": 10,
    "title": "DevOps",
    "description": "Automate and streamline software delivery.",
    "longDescription": "CI/CD pipelines, monitoring, and infrastructure as code for modern deployments.",
    "image": "https://images.unsplash.com/photo-1667372335962-5fd503a8ae5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2b3BzfGVufDB8fDB8fHww",
    "technologies": ["Jenkins", "Kubernetes", "Terraform"],
    "category": "DevOps",
    "gradient": "from-green-600 to-lime-500"
  },
  {
    "id": 11,
    "title": "Mobile Security",
    "description": "Keep mobile apps and data secure.",
    "longDescription": "Implement best practices for encryption, authentication, and secure code.",
    "image": "https://images.unsplash.com/photo-1603985529862-9e12198c9a60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    "technologies": ["OWASP", "Android Security", "iOS Security"],
    "category": "Mobile Security",
    "gradient": "from-yellow-600 to-orange-600"
  },
  {
    "id": 12,
    "title": "Game Development",
    "description": "Design and build interactive games.",
    "longDescription": "Create engaging games for desktop, mobile, or console using modern engines.",
    "image": "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    "technologies": ["Unity", "Unreal Engine", "C++"],
    "category": "Game Development",
    "gradient": "from-red-600 to-pink-600"
  },
  {
    "id": 13,
    "title": "Marketing",
    "description": "Drive growth through strategic marketing.",
    "longDescription": "Use digital tools and analytics to boost brand awareness and reach audiences.",
    "image": "https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFya2V0aW5nfGVufDB8fDB8fHww",
    "technologies": ["Google Ads", "SEO", "Analytics"],
    "category": "Marketing",
    "gradient": "from-pink-400 to-fuchsia-500"
  },
  {
    "id": 14,
    "title": "Accounting",
    "description": "Manage financial records with precision.",
    "longDescription": "Automate accounting tasks and ensure compliance with modern software.",
    "image": "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["QuickBooks", "Excel", "ERP"],
    "category": "Accounting",
    "gradient": "from-amber-500 to-yellow-500"
  },
  {
    "id": 15,
    "title": "Finance",
    "description": "Analyze and grow financial assets.",
    "longDescription": "Tools for budgeting, investing, and financial forecasting.",
    "image": "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["Python", "R", "Excel"],
    "category": "Finance",
    "gradient": "from-lime-500 to-green-500"
  },
  {
    "id": 16,
    "title": "Biotechnology",
    "description": "Innovate with life sciences and biotech.",
    "longDescription": "Research tools, lab automation, and bioinformatics platforms.",
    "image": "https://plus.unsplash.com/premium_photo-1681487546184-98bd8bacc20a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlvdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["BioPython", "LabVIEW", "R"],
    "category": "Biotechnology",
    "gradient": "from-teal-500 to-green-600"
  },
  {
    "id": 17,
    "title": "Healthcare",
    "description": "Healthcare management and telemedicine solutions.",
    "longDescription": "Build secure platforms for patient data, remote consultations, and health analytics.",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["FHIR", "HL7", "React"],
    "category": "Healthcare",
    "gradient": "from-cyan-500 to-blue-600"
  },
  {
    "id": 18,
    "title": "Human Resources",
    "description": "Manage people and workplace processes.",
    "longDescription": "Tools for recruitment, performance tracking, and employee engagement.",
    "image": "https://plus.unsplash.com/premium_photo-1661488439548-a87936c95700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHJ8ZW58MHx8MHx8fDA%3D",
    "technologies": ["BambooHR", "SAP", "Slack"],
    "category": "Human Resources",
    "gradient": "from-indigo-500 to-violet-500"
  },
  {
    "id": 19,
    "title": "Legal",
    "description": "Solutions for case management and compliance.",
    "longDescription": "Digitize legal workflows, document management, and e-signatures.",
    "image": "https://plus.unsplash.com/premium_photo-1694088516834-6fa55faab454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVnYWx8ZW58MHx8MHx8fDA%3D",
    "technologies": ["DocuSign", "Clio", "SharePoint"],
    "category": "Legal",
    "gradient": "from-slate-600 to-gray-600"
  },
  {
    "id": 20,
    "title": "Supply Chain",
    "description": "Optimize supply chain operations.",
    "longDescription": "Track inventory, logistics, and suppliers in real time.",
    "image": "https://plus.unsplash.com/premium_photo-1681487963628-1a9298789518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D",
    "technologies": ["SAP", "Oracle SCM", "RFID"],
    "category": "Supply Chain",
    "gradient": "from-yellow-500 to-amber-600"
  },
  {
    "id": 21,
    "title": "Education Technology",
    "description": "Modern learning platforms and edtech tools.",
    "longDescription": "Online classrooms, e-learning content, and student analytics.",
    "image": "https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWR1JTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    "technologies": ["Moodle", "React", "Firebase"],
    "category": "Education Technology",
    "gradient": "from-sky-500 to-blue-500"
  }
]

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.longDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const hasFilters = searchTerm || selectedCategory !== 'All';
  const displayTitle = hasFilters ? 'Search Results' : 'Featured Projects';

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 font-inter">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-purple-600 hover:text-purple-700 transition-colors">
                <ArrowLeft size={24} />
                <span className="font-semibold">Home</span>
              </Link>
              <h1 className="text-2xl font-bold font-playfair text-gray-900">Courses across Platforms</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              {displayTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {hasFilters
                ? `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} matching your criteria`
                : 'Explore our portfolio of innovative projects.'}
            </p>
          </div>

          <ProjectSearch
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedStatus="" // Or remove if not used
            onStatusChange={() => { }} // Or remove if not used
          />

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                        {project.category}
                      </span>
                    </div>

                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                    <p className="text-gray-500 text-xs mt-2">{project.longDescription}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md font-medium flex items-center gap-1">
                          <Tag size={10} />
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewProject(project)}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg"
                      >
                        View Details
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </div>

      <ProjectDetailsPopup
        isOpen={isDetailsOpen}
        onClose={closeDetails}
        projectTitle={selectedProject?.title || ''}
        domain={selectedProject?.category || ''}
      />
    </>
  );
};

export default ProjectsPage;