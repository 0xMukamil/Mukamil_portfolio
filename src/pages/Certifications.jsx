import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      name: 'Offensive Security Certified Professional (OSCP)',
      issuer: 'Offensive Security',
      date: 'Pending/Coming Soon',
      id: 'TBD',
      status: 'In Progress'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: 'Pending/Coming Soon',
      id: 'TBD',
      status: 'Planned'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: 'Pending/Coming Soon',
      id: 'TBD',
      status: 'Planned'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            A showcase of my professional qualifications and ongoing commitment to staying current in the cybersecurity field. (Certificates will be added here soon).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors" />
              
              <Award className="w-12 h-12 text-primary mb-6" />
              
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-primary font-medium mb-6">{cert.issuer}</p>
              
              <div className="space-y-3 text-sm text-textMuted">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>Status</span>
                  <span className="flex items-center space-x-1 text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>{cert.status}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span>Date</span>
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credential ID</span>
                  <span className="font-mono">{cert.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
