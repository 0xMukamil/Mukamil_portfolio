import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Government First Grade College, Tiptur',
      location: 'Tiptur, Karnataka',
      period: '2023 - 2026',
      description: ''
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Academic <span className="gradient-text">Background</span>
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:border-primary/50 transition-colors">
                <div className="flex flex-col space-y-2 mb-4">
                  <h3 className="text-xl font-bold text-text">{item.degree}</h3>
                  <h4 className="text-lg text-primary font-medium">{item.institution}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-textMuted">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>
                {item.description && <p className="text-textMuted">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
