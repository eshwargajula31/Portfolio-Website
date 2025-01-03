'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'EventPro',
    description: 'Comprehensive Event Management System for In-Person, Virtual & Hybrid Events. Enhance Experiences for Organizers, Speakers, Exhibitors, Sponsors & Attendees.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2iHucpA5DnWhv2tqpRp43tXZwoft2U.png',
    github: 'https://github.com/eshwargajula31/background-generator',
    demo: 'https://background-generator-demo.vercel.app',
    category: 'Web Development',
  },
  {
    title: 'Movie Explorer',
    description: 'A modern movie exploration platform with advanced search and filtering capabilities.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpeg-NkK76oOhtsw1OU53F1HTw36SybiYOR.png',
    github: 'https://github.com/eshwargajula31/background-generator',
    demo: 'https://background-generator-demo.vercel.app',
    category: 'Web Development',
  },
  {
    title: 'Resume Generator',
    description: 'A web application that generates professional resumes based on user input.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-kpNdurRTbsfLjVQVFPe9RlsCVHSLpm.png',
    github: 'https://github.com/eshwargajula31/resume-generator',
    demo: 'https://resume-generator-demo.vercel.app',
    category: 'Web Development',
  },
  {
    title: 'Simple Calculator',
    description: 'A straightforward calculator application that allows users to perform basic arithmetic calculations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-CRGfAAbDGKDVmkU6Ww4FNC9u09BLo8.png',
    github: 'https://github.com/eshwargajula31/background-generator',
    category: 'Web Development',
  },
]

export default function WebDevelopment() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 font-heading text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Web Development Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-600">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-end space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <FiGithub className="text-xl" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <FiExternalLink className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

