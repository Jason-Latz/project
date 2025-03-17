import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Brain, Terminal, Building2, GraduationCap, ExternalLink } from 'lucide-react';

// Project data from resume
const projects = [
  {
    title: "Generic Mapping Software (C++)",
    description: "Developed mapping software using Open Street Maps data to detect buildings & pathways. Integrated Chicago Transit Authority's API for live bus updates and implemented optimal pathway detection algorithms.",
    tech: ["C++", "APIs", "Algorithms", "OOP"],
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Jason-Latz",
    demo: "#"
  },
  {
    title: "Python Compiler (C)",
    description: "Built a scaled-down Python compiler with modular scanning, parsing, and interpreting components. Implemented using test-driven development approach.",
    tech: ["C", "TDD", "Unix/Linux"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Jason-Latz",
    demo: "#"
  },
  {
    title: "Ferrofluid Energy Generation",
    description: "Developed an alternative renewable energy source for tidal sectors. Created detailed CAD drawings and conducted extensive testing.",
    tech: ["Solidworks", "Research", "Agile"],
    image: "https://images.unsplash.com/photo-1548247661-3d7905340b27?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Jason-Latz",
    demo: "#"
  }
];

const workExperience = [
  {
    title: "C3 Artificial Intelligence Lab",
    role: "Elizabeth Project Developer",
    period: "December 2024 - Present",
    description: "Developed AI-powered system using OpenAI API and RAG for Northwestern MSAI program inquiries. Integrated AI avatar with Zoom for automated meeting participation.",
    tech: ["Python", "LangChain", "OpenAI APIs", "RAG"]
  },
  {
    title: "U.S. House of Representatives",
    role: "Intern",
    period: "June - July 2022",
    description: "Conducted legislative research, led Capitol tours, and optimized office systems for media monitoring.",
    tech: ["Research", "Leadership", "Excel"]
  },
  {
    title: "Nike Tennis Camps",
    role: "Assistant Coach",
    period: "June - July 2023",
    description: "Managed and ran drills with 120-player camp of kids age 12-17.",
    tech: ["Leadership", "Teaching", "Team Management"]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Replace with your headshot URL */}
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                alt="Jason Latz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-3xl text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6">Jason Latz</h1>
              <p className="text-xl mb-4">Computer Science Student at Northwestern University</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <span className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Evanston, IL
                </span>
                <span className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> latz@u.northwestern.edu
                </span>
                <span className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> (602) 647-6299
                </span>
              </div>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/jason-latz-7b8634242" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-green-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Jason-Latz" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-green-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:latz@u.northwestern.edu" className="p-2 hover:text-green-200 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-emerald-600" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-700 mb-2">Northwestern University</h3>
              <p className="text-gray-600 mb-4">Expected Graduation: June 2027</p>
              <p className="text-lg mb-2">B.S. in Computer Science, McCormick School of Engineering and Applied Science</p>
              <p className="text-lg mb-4">Minor in Psychology, Weinberg College of Arts and Sciences</p>
              <p className="font-semibold mb-2">GPA: 4.0/4.0 | ACT: 36/36</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <p className="text-gray-700">Data Structures & Algorithms, Agile Software Studio (Skills: React.js, SQL, Cloud Deployment), Discrete Math, Linear Algebra, MATLAB, Computer Systems, Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Code2 className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-600">C++, Python, C, React.js, SQL, MATLAB</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Terminal className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-gray-600">Solidworks, Git, APIs, Machine Learning, Cloud Deployment</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Brain className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
              <p className="text-gray-600">Project Management, Spanish, Microsoft Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center">
            <Building2 className="w-8 h-8 mr-3 text-emerald-600" />
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-emerald-700">{job.title}</h3>
                <p className="text-lg font-semibold mb-2">{job.role}</p>
                <p className="text-gray-600 mb-4">{job.period}</p>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-emerald-600">
                      <Github size={20} className="mr-1" /> Code
                    </a>
                    <a href={project.demo} className="flex items-center text-gray-600 hover:text-emerald-600">
                      <ExternalLink size={20} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a 
            href="mailto:latz@u.northwestern.edu"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Mail className="mr-2" />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Jason Latz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;