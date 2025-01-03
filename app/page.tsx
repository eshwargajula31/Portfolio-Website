'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 flex items-center justify-center min-h-screen">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 font-heading text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
         Hi, I'm Eshwar Gajula
        </motion.h1>
        <motion.div
          className="text-xl md:text-2xl mb-6 text-gray-700 h-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              2000,
              'Problem Solver',
              2000,
              'Machine Learning Enthusiast',
              2000,
              'IoT Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/portfolio" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.span>
          </Link>
          <Link href="/contact" className="bg-transparent hover:bg-teal-600 text-teal-600 hover:text-white font-bold py-2 px-4 rounded-full border border-teal-600 hover:border-transparent transition-colors duration-300">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

