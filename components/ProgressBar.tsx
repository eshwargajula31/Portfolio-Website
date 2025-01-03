'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

export default function ProgressBar({ level }: ProgressBarProps) {
  const getProgressWidth = (level: string) => {
    switch (level) {
      case 'Beginner':
        return '33%'
      case 'Intermediate':
        return '66%'
      case 'Advanced':
        return '100%'
      default:
        return '0%'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-yellow-500'
      case 'Intermediate':
        return 'bg-blue-500'
      case 'Advanced':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
      <motion.div
        className={`h-2.5 rounded-full ${getLevelColor(level)}`}
        initial={{ width: 0 }}
        animate={{ width: getProgressWidth(level) }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  )
}

