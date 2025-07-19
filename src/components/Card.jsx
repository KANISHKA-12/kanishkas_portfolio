import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiVite, SiVercel } from 'react-icons/si';

function Card() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { 
      name: 'HTML5', 
      icon: FaHtml5, 
      color: 'text-orange-500', 
      bg: 'from-orange-500/20 to-red-500/20',
      shadowColor: 'shadow-orange-500/50',
      description: 'Semantic markup and modern HTML5 features',
      level: 95
    },
    { 
      name: 'CSS3', 
      icon: FaCss3Alt, 
      color: 'text-blue-500', 
      bg: 'from-blue-500/20 to-cyan-500/20',
      shadowColor: 'shadow-blue-500/50',
      description: 'Advanced styling, animations, and responsive design',
      level: 90
    },
    { 
      name: 'JavaScript', 
      icon: FaJs, 
      color: 'text-yellow-400', 
      bg: 'from-yellow-400/20 to-orange-400/20',
      shadowColor: 'shadow-yellow-400/50',
      description: 'ES6+, DOM manipulation, and async programming',
      level: 88
    },
    { 
      name: 'React', 
      icon: FaReact, 
      color: 'text-blue-400', 
      bg: 'from-blue-400/20 to-cyan-400/20',
      shadowColor: 'shadow-blue-400/50',
      description: 'Component-based architecture and state management',
      level: 85
    },
    { 
      name: 'Node.js', 
      icon: FaNodeJs, 
      color: 'text-green-400', 
      bg: 'from-green-400/20 to-emerald-400/20',
      shadowColor: 'shadow-green-400/50',
      description: 'Server-side JavaScript and API development',
      level: 80
    },
    { 
      name: 'Tailwind CSS', 
      icon: SiTailwindcss, 
      color: 'text-cyan-400', 
      bg: 'from-cyan-400/20 to-blue-400/20',
      shadowColor: 'shadow-cyan-400/50',
      description: 'Utility-first CSS framework for rapid UI development',
      level: 92
    },
    { 
      name: 'Framer Motion', 
      icon: SiFramer, 
      color: 'text-pink-400', 
      bg: 'from-pink-400/20 to-purple-400/20',
      shadowColor: 'shadow-pink-400/50',
      description: 'Advanced animations and interactive experiences',
      level: 78
    },
    { 
      name: 'Git', 
      icon: FaGitAlt, 
      color: 'text-red-400', 
      bg: 'from-red-400/20 to-pink-400/20',
      shadowColor: 'shadow-red-400/50',
      description: 'Version control and collaborative development',
      level: 87
    },
    { 
      name: 'Vite', 
      icon: SiVite, 
      color: 'text-purple-400', 
      bg: 'from-purple-400/20 to-indigo-400/20',
      shadowColor: 'shadow-purple-400/50',
      description: 'Fast build tool and development server',
      level: 82
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] py-20 px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Enhanced Header */}
        <motion.div variants={cardVariants} className="text-center mb-20">
          <motion.div
            className="inline-block mb-8"
            variants={floatingVariants}
            animate="animate"
          >
            <span className="text-6xl">⚡</span>
          </motion.div>
          
          <motion.h2
            className="text-7xl md:text-9xl font-poppins font-bold bg-gradient-to-r from-white via-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8 leading-tight"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            My Skills
          </motion.h2>
          
          <motion.div 
            className="flex justify-center items-center gap-4 mb-8"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-20"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20"></div>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Technologies and tools I use to craft exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Card Container */}
              <motion.div
                className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  animate={hoveredSkill === index ? {
                    background: [
                      `linear-gradient(45deg, ${skill.bg.split(' ')[1]}, ${skill.bg.split(' ')[3]})`,
                      `linear-gradient(135deg, ${skill.bg.split(' ')[3]}, ${skill.bg.split(' ')[1]})`,
                      `linear-gradient(225deg, ${skill.bg.split(' ')[1]}, ${skill.bg.split(' ')[3]})`,
                      `linear-gradient(315deg, ${skill.bg.split(' ')[3]}, ${skill.bg.split(' ')[1]})`
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Skill Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, -10, 10, 0],
                    y: -10
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`text-7xl ${skill.color} flex justify-center relative`}>
                    <skill.icon className="drop-shadow-2xl" />
                    
                    {/* Icon Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-30 blur-xl`}
                      animate={hoveredSkill === index ? {
                        scale: [1, 1.5, 1],
                        opacity: [0, 0.5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <skill.icon />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Skill Info */}
                <div className="relative z-10 text-center">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredSkill === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Skill Level Bar */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">Proficiency</span>
                      <span className="text-xs text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.bg.replace('/20', '/80')} rounded-full`}
                        initial={{ width: 0 }}
                        animate={hoveredSkill === index ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Orbs */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={hoveredSkill === index ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  animate={hoveredSkill === index ? {
                    borderImage: [
                      "linear-gradient(0deg, transparent, rgba(6, 182, 212, 0.5), transparent) 1",
                      "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.5), transparent) 1",
                      "linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.5), transparent) 1",
                      "linear-gradient(270deg, transparent, rgba(147, 51, 234, 0.5), transparent) 1"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={cardVariants}
          className="relative text-center bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 rounded-3xl p-16 border border-white/20 overflow-hidden"
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05))",
                "linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(236, 72, 153, 0.05), rgba(147, 51, 234, 0.05))",
                "linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(147, 51, 234, 0.05), rgba(6, 182, 212, 0.05))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.div
            className="relative z-10"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Ready to Build Something Amazing?
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I'm passionate about creating exceptional digital experiences. 
              Let's collaborate and bring your vision to life with cutting-edge technology!
            </motion.p>
            
            <motion.button
              className="group relative px-12 py-5 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 text-white font-bold text-lg rounded-full overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative z-10">Let's Work Together ✨</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Card;