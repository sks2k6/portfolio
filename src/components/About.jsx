
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl filter blur-xl opacity-30"></div>
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative"
            >
              <img 
                alt="Developer working"
                className="rounded-2xl shadow-xl border border-white/10"
               src="https://cdn.ironman.my.id/q/NDdju.jpg" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-4"
            >
              My Journey
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              I'm a beginner coder with a passion for building innovative solutions.
              I built my first website at the age of 16, and I've been hooked ever since.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              since 2020
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold mb-1">Education</h4>
                <p className="text-sm text-muted-foreground">
                Commerce with Computer @ govt school 
                </p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold mb-1">Experience</h4>
                <p className="text-sm text-muted-foreground">
                  5+ Years..
                </p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Kerala,India
                </p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold mb-1">Interests</h4>
                <p className="text-sm text-muted-foreground">
                  web, Ai...
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
