'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 font-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <motion.div
          className="w-80 h-80 relative rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src="/images/me2.jpg"
            alt="Eshwar Gajula"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>
        
        <motion.div
          className="prose max-w-none flex-1 text-justify "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p>
            Hello, I'm Eshwar Gajula, a passionate Frontend Developer with a knack for solving complex problems and building user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React.js, and am well-versed in modern web development frameworks like Next.js.
          </p><br />
          <p>
            I hold a B.Tech in Computer Science, where I developed a strong foundation in programming and problem-solving. My journey as a developer began with creating dynamic, interactive websites, and it has since evolved into building responsive, scalable applications.
          </p><br />
          <p>
            I have hands-on experience working as a Frontend Developer at Code Clause and Coding Raja Technologies, where I contributed to developing web applications like event management systems, calculators, and resume generators. In addition, I've explored the world of IoT as an IoT Developer at Bolt IoT, where I designed and implemented smart monitoring systems using sensor integration.
          </p><br />
          <p>
            Beyond coding, I enjoy solving real-world challenges, working with cutting-edge technologies, and continuously improving my skills through self-driven learning and hands-on projects.
          </p><br />
          <p>
            When I'm not coding, you'll find me learning about Machine Learning, building IoT projects, or sharing my knowledge with others through my portfolio and blogs.
          </p><br />
        </motion.div>
      </div>
    </div>
  )
}

