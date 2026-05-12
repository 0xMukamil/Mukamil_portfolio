import { motion } from 'framer-motion';
import { ExternalLink, Github, ShieldAlert } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Real-Time Fruit Detection System using YOLOv8',
      description: 'Developed a real-time object detection system using YOLOv8 capable of identifying multiple fruit classes through live camera input with optimized inference performance.',
      tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
      link: '#',
      github: '#'
    },
    {
      title: 'Enterprise Network Vulnerability Scanner',
      description: 'A comprehensive scanning tool developed in Python to automate the discovery of open ports, outdated services, and known CVEs across enterprise networks.',
      tags: ['Python', 'Nmap API', 'CVE Database'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div className="flex space-x-3">
                  <a href={project.github} className="text-textMuted hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="text-textMuted hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-textMuted mb-6 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-surface rounded-full text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
