import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setMousePosition({ x: mouseX, y: mouseY });

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    {
      name: "React",
      icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <div className='relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#111111]'>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Main Content */}
      <div className='relative w-full h-full flex items-center justify-center'>
        {/* Title */}
        <motion.div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Interactive Experience
          </h2>
          <p className="text-gray-400 text-lg">Move your cursor to explore</p>
        </motion.div>

        {/* Eyes Container */}
        <motion.div
          className='relative flex gap-16 items-center justify-center'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className='relative'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-full blur-xl opacity-30 animate-pulse`}></div>

              {/* Eye Container */}
              <div className='relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex justify-center items-center rounded-full bg-gradient-to-br from-white to-gray-200 shadow-2xl border-4 border-white/20'>
                {/* Inner Eye */}
                <div className='relative w-[70%] h-[70%] rounded-full bg-gradient-to-br from-gray-800 to-black shadow-inner'>
                  {/* Pupil */}
                  <motion.div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                    }}
                    className='absolute w-full h-12 top-1/2 left-1/2 -translate-x-1/25 -translate-y-1/17'
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${tech.color} flex justify-center items-center shadow-lg border-2 border-white/30`}
                      whileHover={{ scale: 1.2 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(6, 182, 212, 0.5)",
                          "0 0 40px rgba(6, 182, 212, 0.8)",
                          "0 0 20px rgba(6, 182, 212, 0.5)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <img
                        className='w-8 h-8 object-contain filter drop-shadow-lg'
                        src={tech.icon}
                        alt={tech.name}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Reflection */}
                  <div className='absolute top-4 left-4 w-6 h-6 bg-white/30 rounded-full blur-sm'></div>
                </div>

                {/* Tech Label */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <span className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white font-semibold rounded-full text-sm shadow-lg`}>
                    {tech.name}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}


        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-gray-400 text-lg mb-4">Technologies I Love Working With</p>
          <div className="flex justify-center gap-4">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind"].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(6, 182, 212, 0.5)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Eyes;