import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-textMuted leading-relaxed mb-8">
              Whether you have a question, a project proposition, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 glass p-4 rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textMuted">Email</p>
                  <a href="mailto:mukamilpasha5@gmail.com" className="font-medium hover:text-primary transition-colors">mukamilpasha5@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass p-4 rounded-xl">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textMuted">Phone</p>
                  <p className="font-medium">8050604914</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 glass p-4 rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textMuted">Location</p>
                  <p className="font-medium">Global / Remote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-background font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
