import { motion } from 'framer-motion';
import { Code, Server, ShieldCheck, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    'Security Monitoring',
    'Vulnerability Assessment',
    'Network Security',
    'Python Scripting',
    'SIEM Fundamentals',
    'Linux Administration',
    'Threat Detection'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-textMuted text-lg leading-relaxed">
            <p>
              I am a passionate Cybersecurity Professional dedicated to protecting digital assets and infrastructure from emerging threats. With a strong foundation in ethical hacking and security protocols, I thrive in environments where I can proactively identify and mitigate vulnerabilities.
            </p>
            <p>
              My approach combines technical expertise with a deep understanding of business risk, ensuring that security measures enable rather than hinder organizational objectives. I constantly update my skills to stay ahead of the ever-evolving cyber threat landscape.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass px-5 py-4 rounded-xl flex items-center space-x-3 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="font-medium text-text">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
