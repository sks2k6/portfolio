
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Terminal,
  Layers,
  Cloud,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "Next.js", "TailwindCSS", "JavaScript", "TypeScript", "HTML/CSS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
    color: "from-green-500 to-emerald-400",
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"],
    color: "from-yellow-500 to-amber-400",
  },
  {
    category: "DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform", "Vercel"],
    color: "from-purple-500 to-violet-400",
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    items: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"],
    color: "from-red-500 to-rose-400",
  },
  {
    category: "Tools",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"],
    color: "from-indigo-500 to-blue-400",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-30" />
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
              <h4 className="text-xl font-bold">Senior Developer</h4>
              <p className="text-primary">Tech Solutions Inc. | 2020 - Present</p>
              <p className="mt-2 text-muted-foreground">
                Led development of multiple web applications using React and
                Node.js. Implemented CI/CD pipelines and mentored junior
                developers.
              </p>
            </div>
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
              <h4 className="text-xl font-bold">Full Stack Developer</h4>
              <p className="text-primary">Digital Innovations | 2018 - 2020</p>
              <p className="mt-2 text-muted-foreground">
                Developed and maintained multiple client projects. Worked with
                React, Vue, and Angular on the frontend, and Node.js/Express
                on the backend.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
