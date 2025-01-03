'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FiInfo } from 'react-icons/fi'

interface SkillCardProps {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  projectLink?: string
}

export default function SkillCard({ name, level, description, projectLink }: SkillCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

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
    <motion.div
      className="w-full h-40 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-gray-800 rounded-lg p-4 backface-hidden">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${getLevelColor(level)}`}>
            {level}
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full bg-gray-700 rounded-lg p-4 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <p className="text-sm mb-2">{description}</p>
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
            </a>
          )}
        </div>
      </motion.div>

      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <FiInfo size={18} />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-gray-900 text-white p-2 rounded-md text-sm max-w-xs"
              sideOffset={5}
            >
              Click to flip the card and see more details
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </motion.div>
  )
}

