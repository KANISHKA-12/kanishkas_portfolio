import React from 'react';
import { motion } from 'framer-motion'

function Marquee() {
  const marqueeText = "✨ Creative Web Developer • Modern UI/UX Designer • Problem Solver • Code Enthusiast"

  return (
    <div className='relative w-full py-20 bg-gradient-to-r from-[#004D43] via-[#005A4F] to-[#004D43] overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-4 h-4 bg-cyan-400/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-32 w-6 h-6 bg-emerald-400/30 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-3 h-3 bg-teal-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Main Marquee Container */}
      <div className='relative'>
        {/* Top Border with Gradient */}
        <div className='h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-8'></div>
        
        {/* Marquee Text */}
        <div className='flex whitespace-nowrap overflow-hidden'>
          <motion.div
            className='flex items-center gap-8'
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 25
            }}
          >
            {/* First Instance */}
            <h1 className='text-[12vw] md:text-[8vw] lg:text-[6vw] font-poppins font-bold text-transparent bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text leading-none pr-8'>
              {marqueeText}
            </h1>
            
            {/* Second Instance for Seamless Loop */}
            <h1 className='text-[12vw] md:text-[8vw] lg:text-[6vw] font-poppins font-bold text-transparent bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text leading-none pr-8'>
              {marqueeText}
            </h1>
          </motion.div>
        </div>

        {/* Bottom Border with Gradient */}
        <div className='h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-8'></div>
      </div>

      {/* Secondary Marquee (Reverse Direction) */}
      <div className='mt-12 opacity-60'>
        <div className='flex whitespace-nowrap overflow-hidden'>
          <motion.div
            className='flex items-center gap-12'
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 30
            }}
          >
            {/* Skills/Technologies */}
            {[
              "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS", 
              "Framer Motion", "GSAP", "Responsive Design", "UI/UX", "Git", "VS Code"
            ].map((skill, index) => (
              <motion.span
                key={index}
                className='text-2xl md:text-3xl font-poppins font-medium text-emerald-200/80 px-6 py-2 border border-emerald-400/30 rounded-full bg-emerald-400/10 backdrop-blur-sm'
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(52, 211, 153, 0.2)",
                  borderColor: "rgba(52, 211, 153, 0.6)"
                }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays for Fade Effect */}
      <div className='absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#004D43] to-transparent pointer-events-none'></div>
      <div className='absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#004D43] to-transparent pointer-events-none'></div>
    </div>
  )
}

export default Marquee
