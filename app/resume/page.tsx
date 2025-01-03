'use client'

import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'


export default function Resume() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 font-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h1>
      
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gajula Eshwar</h2>
          <div className="text-gray-600 space-y-1">
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Fields of Interest</h3>
          <p className="text-gray-600">
            Web Development, Machine Learning, Internet of Things (IoT), High Performance Computing, Open-Source Software Development
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <div>
            <h4 className="text-lg font-semibold">Bachelor of Technology (B.Tech) - Computer Science Engineering</h4>
            <p className="text-gray-600">SVS Group of Institutions | Aug 2020 - Jul 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Relevant Coursework: Algorithms, Data Structures, Machine Learning, Computer Vision</li>
              <li>Academic Excellence: Consistently ranked among the top performers in the batch</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
          <div>
            <h4 className="text-lg font-semibold">IoT Developer</h4>
            <p className="text-gray-600">Bolt IoT | Nov 2023 - Dec 2023</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Designed a smart monitoring system using combined light and temperature sensors for automated alerts</li>
              <li>Developed scripts for real-time data collection and analysis using IoT modules</li>
            </ul>
          </div>
        </div>


        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Languages: Python, Bash, Java</li>
            <li>Operating Systems: Linux, Windows</li>
            <li>APIs & Libraries: TensorFlow, Flask</li>
            <li>DevOps: Git, Docker</li>
            <li>Web: HTML5, CSS, JavaScript, TypeScript, Web2py, Bootstrap, Responsive Design</li>
            <li>IoT: Sensor Data Integration, Real-Time Monitoring System</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Certifications</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>JavaScript Algorithms and Data Structures – FreeCodeCamp</li>
            <li>Machine Learning with Python</li>
            <li>Responsive Web Design – FreeCodeCamp</li>
          </ul>
        </div>
      </motion.div>
      
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.a
          href="/resume/Resume.pdf"
          download
          className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiDownload className="mr-2" />
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  )
}

