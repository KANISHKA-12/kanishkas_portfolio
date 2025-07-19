import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobile, FaPalette } from "react-icons/fa";

function About() {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Creating responsive, modern websites with clean code and optimal performance.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaLaptopCode,
      title: "Frontend Development", 
      description: "Building interactive user interfaces with React, JavaScript, and modern frameworks.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices and screen sizes.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive interfaces that provide excellent user experiences.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1 
            className="text-6xl md:text-8xl font-poppins font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-white mb-6">
              Passionate Developer & Creative Problem Solver
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate web developer with a strong focus on creating dynamic, responsive, 
              and user-friendly websites. With expertise in modern technologies like HTML, CSS, 
              JavaScript, React, and Node.js, I specialize in crafting seamless digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Driven by a love for coding and problem-solving, I constantly learn and adapt to 
              stay ahead of the latest web development trends. My goal is to transform ideas into 
              beautiful, functional digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl"></div>
              <motion.img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Developer workspace"
                className="w-full h-[400px] object-cover rounded-2xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-20"></div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-4xl font-poppins font-bold text-center text-white mb-12">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer group"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)"
                }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                transition={{ duration: 0.2 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <p className="text-gray-300 text-sm">
                      Let's discuss how I can help bring your vision to life with modern web technologies.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-white/10"
        >
          <h3 className="text-3xl font-poppins font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. I'm always excited to work on new challenges and bring innovative ideas to life.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;