import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Terminal, Award, Book, Coffee } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText =  " Technology Enthusiastic, C#, ASP.Net, Node.JS and Python";
  
  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} px-4 sm:px-6 lg:px-8`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Harsh Parashar</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-2xl min-h-[5rem]">
              {typedText}<span className="animate-pulse">|</span>
            </p>
            <div className="flex space-x-4 mb-8 sm:mb-12">
              <a href="https://github.com/harshitpara567" target="_blank" rel="noopener noreferrer" 
                 className="p-2 sm:p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all transform hover:scale-110">
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/harsh-parashar-b8a7ba28b" target="_blank" rel="noopener noreferrer"
                 className="p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all transform hover:scale-110">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:harshitparashar73@gmail.com"
                 className="p-2 sm:p-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all transform hover:scale-110">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <ChevronDown size={32} className="text-gray-600" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center space-x-2 mb-6 sm:mb-8">
            <User className="text-indigo-600" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Working on laptop"
                className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                An optimistic and hardworking individual who is very passionate towards technologies. Utilize my skills in interacting and exploring in IT field. I have gained skills in C++, JAVA, C (Programming language), python and in web designing for instance HTML, CSS, JAVASCRIPT etc.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Book className="text-indigo-600" size={20} />
                    <h3 className="font-semibold text-gray-900">Education</h3>
                  </div>
                  <p className="text-gray-700">MCA <br/> JECRC University of Jaipur</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg transform transition-all hover:scale-105 hover:shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="text-indigo-600" size={20} />
                    <h3 className="font-semibold text-gray-900">Experience</h3>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Aadvik TekLabs Pvt, Ltd.
                  </h4>
                  <p className="text-gray-700">March2024-May2024<br/>Frontend Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center space-x-2 mb-8 sm:mb-12">
            <Code2 className="text-indigo-600" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Projects</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ProjectCard 
              title="FOOD RECIPES WEBSITE"
              description="Developed a full-stack food recipe website where users can browse, search, and save recipes. Integrated MongoDB for storing recipe data, Node.js for backend API management, and React.js for a dynamic user interface. Added features such as recipe categories, search filters, and user authentication for a personalized experience."
              image="https://i.imgur.com/2HY8rbi.jpeg"
              tags={['React', 'Node.js', 'MongoDB']}
              githubLink="https://github.com/harshitpara567/Food-recipe"
              demoLink="https://demo.com"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center space-x-2 mb-8 sm:mb-12">
            <Award className="text-indigo-600" size={24} />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="Reactjs" level={90} />
            <SkillBadge name="HTML" level={85} />
            <SkillBadge name="C++" level={80} />
            <SkillBadge name="Python" level={60} />
            <SkillBadge name="AWS" level={50} />
            <SkillBadge name="CSS" level={75} />
            <SkillBadge name="MongoDB" level={80} />
            <SkillBadge name="Tailwind CSS" level={50} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Coffee className="text-indigo-600" size={32} sm:size={40} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Let's Work Together</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              I'm currently available for freelance work and full-time opportunities.
              If you're interested in working together, please get in touch!
            </p>
            <a
              href="mailto:harshitparashar73@gmail.com"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm sm:text-base">© 2024 Harsh Parashar. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/harshitpara567" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-gray-300 transition-colors transform hover:scale-110">
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/harsh-parashar-b8a7ba28b" target="_blank" rel="noopener noreferrer"
                 className="hover:text-gray-300 transition-colors transform hover:scale-110">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:harshitparashar73@gmail.com"
                 className="hover:text-gray-300 transition-colors transform hover:scale-110">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;