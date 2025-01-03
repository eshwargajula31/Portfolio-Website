'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
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
]

export default function MachineLearning() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 font-heading text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Machine Learning Projects
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
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

