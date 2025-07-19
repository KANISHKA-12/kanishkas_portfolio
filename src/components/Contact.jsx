import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaRocket } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const ContactDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const form = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_y8pjhld',
        'template_4pw8vn9',
        form.current,
        'DRzrGp01XHDINJptR'
      );
      setSubmitStatus('success');
      setShowPopup(true);
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setShowPopup(false);
      }, 4000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "kanishka@example.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 79827 14236",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Delhi, India",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kanishkasingh04/", color: "text-blue-400", name: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/KANISHKA-12?tab=repositories", color: "text-gray-400", name: "GitHub" },
  ];

  return (
    <section id="contact-section" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] py-20 px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
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
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            className="inline-block mb-8"
            variants={floatingVariants}
            animate="animate"
          >
            <FaRocket className="text-6xl text-cyan-400" />
          </motion.div>

          <motion.h1
            className="text-7xl md:text-9xl font-poppins font-bold bg-gradient-to-r from-white via-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-8 leading-tight"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            Get In Touch
          </motion.h1>

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
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Form Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0"
                animate={{
                  opacity: focusedField ? [0, 0.5, 0] : 0,
                  background: [
                    "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                    "linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Send Message
                </h3>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-white/5 backdrop-blur-sm text-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 border border-white/10 hover:border-white/20 focus:border-cyan-500/50"
                      placeholder=" "
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.from_name || focusedField === 'name'
                        ? 'top-2 text-xs text-cyan-400'
                        : 'top-4 text-gray-400'
                      }`}>
                      Your Name
                    </label>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-white/5 backdrop-blur-sm text-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 border border-white/10 hover:border-white/20 focus:border-cyan-500/50"
                      placeholder=" "
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.from_email || focusedField === 'email'
                        ? 'top-2 text-xs text-cyan-400'
                        : 'top-4 text-gray-400'
                      }`}>
                      Your Email
                    </label>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className="w-full bg-white/5 backdrop-blur-sm text-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 border border-white/10 hover:border-white/20 focus:border-cyan-500/50 resize-none"
                      placeholder=" "
                    />
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${formData.message || focusedField === 'message'
                        ? 'top-2 text-xs text-cyan-400'
                        : 'top-4 text-gray-400'
                      }`}>
                      Your Message
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white p-4 rounded-2xl font-semibold text-lg overflow-hidden ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    whileHover={!isSubmitting ? {
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
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
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Popup */}
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/20 text-center max-w-md mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Message Sent!
              </h3>
              <p className="text-gray-300 mb-2">Thank you for reaching out!</p>
              <p className="text-gray-300 mb-8">I'll get back to you as soon as possible.</p>
              <motion.button
                onClick={() => setShowPopup(false)}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Awesome!
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Status Message */}
        {submitStatus && !showPopup && (
          <motion.div
            className={`fixed bottom-8 right-8 p-4 rounded-2xl backdrop-blur-xl border z-50 ${submitStatus === 'success'
                ? 'bg-green-500/20 border-green-500/30 text-green-300'
                : 'bg-red-500/20 border-red-500/30 text-red-300'
              }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            {submitStatus === 'success'
              ? '✅ Message sent successfully!'
              : '❌ Failed to send message. Please try again.'}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactDetails;