import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

function MainLandingPage() {
  const [model, setmodel] = useState(false);

  useEffect(() => {
    if (model) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [model]);

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
    <>
      <div className='relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] overflow-hidden'>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className='relative z-10 flex items-center justify-center min-h-screen px-8'>
          <motion.div
            className='text-center max-w-4xl mx-auto'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading with gradient text */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1
                className='text-6xl md:text-8xl font-poppins font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent leading-tight'
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Kanishka Singh
              </motion.h1>
              <motion.div
                className="text-4xl md:text-6xl mt-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                👩‍💻
              </motion.div>
            </motion.div>

            {/* Subtitle with typing effect */}
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-poppins font-semibold mb-6 bg-gradient-to-r from-[#1C87AB] to-[#20B2AA] bg-clip-text text-transparent"
            >
              Creative Web Developer
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-poppins text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              I craft beautiful, responsive websites with clean code and seamless user experiences.
              Passionate about turning ideas into digital reality through modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                onClick={() => setmodel(true)}
                className='group flex items-center gap-3 font-poppins bg-gradient-to-r from-[#1C87AB] to-[#20B2AA] px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(28, 135, 171, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>

              <motion.a
                href="#contact"
                className='flex items-center gap-3 font-poppins border-2 border-cyan-400/50 px-8 py-4 rounded-full text-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300'
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(34, 211, 238, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6"
            >
              {[
                { icon: FaGithub, href: "#", label: "GitHub" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaEnvelope, href: "#", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {model && (
        <motion.div 
          className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setmodel(false)}
        >
          <motion.div 
            className='relative w-full max-w-6xl bg-gradient-to-br from-[#1a1919] to-[#0f0f0f] rounded-2xl shadow-2xl border border-white/10 overflow-hidden'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button 
              onClick={() => setmodel(false)}
              className='absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-300'
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>

            <div className='flex flex-col lg:flex-row min-h-[600px]'>
              {/* Left Content */}
              <div className='flex-1 p-8 lg:p-12'>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className='text-4xl font-poppins font-bold bg-gradient-to-r from-[#1C87AB] to-[#20B2AA] bg-clip-text text-transparent mb-6'>
                    About Me
                  </h1>
                  
                  <p className='text-gray-300 text-lg leading-relaxed mb-8'>
                    I'm a passionate web developer skilled in HTML, CSS, and JavaScript, dedicated to building clean, 
                    responsive, and user-friendly websites. I focus on writing efficient code and creating seamless 
                    user experiences that balance design and functionality.
                  </p>

                  {/* Skills Tags */}
                  <div className='mb-8'>
                    <h3 className='text-xl font-semibold text-cyan-400 mb-4'>Skills</h3>
                    <div className='flex flex-wrap gap-3'>
                      {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Framer Motion'].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className='px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium'
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          #{skill.toLowerCase()}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className='text-xl font-semibold text-cyan-400 mb-6'>Tech Stack</h3>
                    <div className='grid grid-cols-3 gap-8'>
                      {[
                        { 
                          name: 'HTML5', 
                          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                          color: '#E44D26'
                        },
                        { 
                          name: 'CSS3', 
                          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                          color: '#1572B6'
                        },
                        { 
                          name: 'JavaScript', 
                          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                          color: '#F0DB4F'
                        }
                      ].map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          className='text-center group'
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <motion.div
                            className='w-16 h-16 mx-auto mb-3 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-300'
                            whileHover={{ scale: 1.1, y: -5 }}
                          >
                            <img src={tech.icon} alt={`${tech.name} logo`} className='w-full h-full' />
                          </motion.div>
                          <h4 className='font-poppins font-medium' style={{ color: tech.color }}>
                            {tech.name}
                          </h4>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Illustration */}
              <div className='flex-1 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-cyan-500/5 to-blue-500/5'>
                <motion.div
                  className='relative'
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl'></div>
                  <motion.img 
                    src='https://anuragsinghbam.com/images/coder.svg'
                    alt="Developer illustration"
                    className='relative z-10 w-full max-w-md'
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default MainLandingPage;