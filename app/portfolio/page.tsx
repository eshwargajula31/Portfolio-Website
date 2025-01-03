'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

const projects = [
  {
    title: 'EventPro',
    description: 'Comprehensive Event Management System for In-Person, Virtual & Hybrid Events. Enhance Experiences for Organizers, Speakers, Exhibitors, Sponsors & Attendees.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-2iHucpA5DnWhv2tqpRp43tXZwoft2U.png',
    github: 'https://github.com/eshwargajula31/event-management-system',
    demo: 'https://event-management-system-se9e.vercel.app/',
    category: 'Web Development',
  },
  {
    title: 'Movie Explorer',
    description: 'A modern movie exploration platform with advanced search and filtering capabilities.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpeg-NkK76oOhtsw1OU53F1HTw36SybiYOR.png',
    github: 'https://github.com/eshwargajula31/Movie-Explorer',
    demo: 'https://eshwargajula31.github.io/Movie-Explorer/',
    category: 'Web Development',
  },
  {
    title: 'Resume Generator',
    description: 'A web application that generates professional resumes based on user input.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-kpNdurRTbsfLjVQVFPe9RlsCVHSLpm.png',
    github: 'https://github.com/eshwargajula31/Resume',
    demo: 'https://eshwargajula31.github.io/Resume/',
    category: 'Web Development',
  },
  {
    title: 'Simple Calculator',
    description: 'A straightforward calculator application that allows users to perform basic arithmetic calculations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-CRGfAAbDGKDVmkU6Ww4FNC9u09BLo8.png',
    github: 'https://github.com/eshwargajula31/simple-calculator',
    category: 'Web Development',
  },
  {
    title: 'Linear Regression-Based House Price Prediction',
    description: 'This project aims to predict house prices using a linear regression model. The application is built using Python for the backend and Flask for the web interface.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-5IElotiqYjPdhDf9oH3PKk4NU0qiMH.jpeg',
    github: 'https://github.com/eshwargajula31/Linear-regression-Based-House-Price-Prediction',
    category: 'Machine Learning',
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'Handwritten Digit Recognition using Transfer Learning and MNIST Dataset.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-OPK3U0TnuCZr9x5p3uovjxw1x9oxkA.png',
    github: 'https://github.com/White-OG/Hand-Written-Digit-Recognition-Using-Transfer-Learning',
    category: 'Machine Learning',
  },
  {
    title: 'Combined Sensors',
    description: 'It is a versatile system that utilizes Bolt IoT devices along with temperature and light sensors to monitor environmental conditions.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-hgXUdv9b9oDYrsBUm9piKorx2sjU5u.png',
    github: 'https://github.com/eshwargajula31/Combined-Sensors',
    category: 'IoT',
  },
  {
    title: 'Termux Shell',
    description: 'Beautify your shell with this Repo.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-6F8mDzoQPwTWkRNwEaRpxSb7W6SWST.jpeg',
    github: 'https://github.com/eshwargajula31/termux-shell',
    category: 'Other',
  },
]

const categories = ['All', 'Web Development', 'Machine Learning', 'IoT', 'Other']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 font-heading text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.h1>

      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-primary-600">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              <div className="flex justify-end space-x-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub className="text-xl" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={`View ${project.title} demo`}
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

