import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaDownload } from 'react-icons/fa'
import img from '../assets/img.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const linkVariants = {
        hover: { 
            scale: 1.1,
            y: -2,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    }

    return (
        <motion.div 
            className={`fixed w-full z-[999] px-4 md:px-8 py-4 transition-all duration-300 ${
                scrolled 
                    ? 'backdrop-blur-xl bg-black/70 border-b border-white/10' 
                    : 'backdrop-blur-sm bg-black/20'
            }`}
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                {/* Logo */}
                <motion.div 
                    className='logo'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href='/' className='block'>
                        <motion.div
                            className='relative'
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img 
                                className='w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400/50 p-1' 
                                src={img}
                                alt="Kanishka Singh Logo" 
                            />
                            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-sm'></div>
                        </motion.div>
                    </a>
                </motion.div>

                {/* Navigation Links */}
                <div className='flex items-center gap-4 md:gap-8'>
                    {/* CV Download Button */}
                    <motion.a 
                        className='hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-poppins font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href='https://drive.google.com/file/d/1aKgS-Q7QAuDAaOAaqOwDofIlQIeYYwFK/view'
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaDownload size={16} />
                        <span>Resume</span>
                    </motion.a>

                    {/* Mobile CV Link */}
                    <motion.a 
                        className='md:hidden text-lg font-poppins text-cyan-400 hover:text-cyan-300 transition-colors' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href='https://drive.google.com/file/d/1aKgS-Q7QAuDAaOAaqOwDofIlQIeYYwFK/view'
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        CV
                    </motion.a>

                    {/* Social Links */}
                    <div className='flex items-center gap-4'>
                        {[
                            { 
                                icon: FaGithub, 
                                href: "https://github.com/KANISHKA-12",
                                label: "GitHub",
                                color: "hover:text-gray-300"
                            },
                            { 
                                icon: FaInstagram, 
                                href: "https://www.instagram.com/__kanishkaaaaaa/",
                                label: "Instagram", 
                                color: "hover:text-pink-400"
                            },
                            { 
                                icon: FaLinkedin, 
                                href: "https://www.linkedin.com/in/kanishkasingh04/",
                                label: "LinkedIn",
                                color: "hover:text-blue-400"
                            }
                        ].map((social, index) => (
                            <motion.a 
                                key={index}
                                href={social.href} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white ${social.color} transition-all duration-300`}
                                variants={linkVariants}
                                whileHover="hover"
                                whileTap="tap"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar
