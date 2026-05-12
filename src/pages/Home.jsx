import { motion } from 'framer-motion';
import { Terminal, Shield, Lock, FileDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full text-sm font-mono text-primary">
            <Terminal className="w-4 h-4" />
            <span>Hello, World! I am</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Mukamil <br />
            <span className="gradient-text">Pasha M.</span>
          </h1>
          
          <p className="text-xl text-textMuted max-w-2xl leading-relaxed">
            Aspiring SOC Analyst with hands-on experience in security monitoring, 
            vulnerability assessment, and incident analysis.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/Mukamil_Pasha_M_Resume.pdf" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-lg font-medium transition-colors">
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
            <a href="/contact" 
               className="inline-flex items-center space-x-2 glass hover:bg-surface/80 px-6 py-3 rounded-lg font-medium transition-colors text-text">
              <Shield className="w-5 h-5" />
              <span>Hire Me</span>
            </a>
          </div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-4 glass rounded-full flex items-center justify-center overflow-hidden border-primary/30">
              <img 
                src="/Mukamil_image.jpeg" 
                alt="Mukamil Pasha M" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass p-4 rounded-xl text-primary"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass p-4 rounded-xl text-secondary"
            >
              <Lock className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
