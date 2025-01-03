'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import LazyComponent from '@/components/LazyComponent'

const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 'Advanced', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', level: 'Intermediate', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++', level: 'Beginner', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', level: 'Beginner', image: '/images/java.svg' },
      { name: 'Bash', level: 'Intermediate', image: '/images/bash.svg' },
    ],
  },
  {
    name: 'Web Development / Front-End Development',
    skills: [
      { name: 'HTML5', level: 'Advanced', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', level: 'Advanced', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React.js', level: 'Advanced', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', level: 'Intermediate', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Bootstrap', level: 'Intermediate', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind CSS', level: 'Beginner', image: '/images/tailwindcss-original.svg' },
      { name: 'TypeScript', level: 'Intermediate', image: '/images/typescript.svg' },
    ],
  },
  {
    name: 'Operating System',
    skills: [
      { name: 'Linux', level: 'Advanced', image: '/images/linux.svg' },
    ],
  },
  {
    name: 'Version Control',
    skills: [
      { name: 'Git', level: 'Advanced', image: '/images/git.svg' },
    ],
  },
  {
    name: 'Data Visualization',
    skills: [
      { name: 'Matplotlib', level: 'Beginner', image: '/images/matplotlib.svg' },
    ],
  },
  {
    name: 'Machine Learning Libraries',
    skills: [
      { name: 'Scikit-Learn', level: 'Beginner', image: '/images/scikitlearn.svg' },
      { name: 'TensrFlow', level: 'Intermediate', image: '/images/tensorflow.svg' },
    ],
  },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 font-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>

      {skillCategories.map((category, categoryIndex) => (
        <motion.section
          key={category.name}
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <LazyComponent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * skillIndex, duration: 0.5 }}
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    skill.level === 'Beginner' ? 'bg-yellow-200 text-yellow-800' :
                    skill.level === 'Intermediate' ? 'bg-blue-200 text-blue-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </LazyComponent>
        </motion.section>
      ))}
    </div>
  )
}

