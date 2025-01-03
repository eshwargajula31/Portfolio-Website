import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'
import { FaSnapchatGhost } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Eshwar Gajula. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/eshwargajula31" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors" aria-label="GitHub">
              <FiGithub className="text-2xl" />
            </Link>
            <Link href="https://www.linkedin.com/in/eshwar-gajula" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors" aria-label="LinkedIn">
              <FiLinkedin className="text-2xl" />
            </Link>
            <Link href="https://www.instagram.com/_eshwar_0531" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors" aria-label="LinkedIn">
              <FiInstagram className="text-2xl" />
            </Link>
            <Link href="mailto:eshwargajula31@gmail.com" className="hover:text-primary-600 transition-colors" aria-label="Email">
              <FiMail className="text-2xl" />
            </Link>
            <Link href="https://www.snapchat.com/add/find.eshwar" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors" aria-label="Snapchat">
              <FaSnapchatGhost className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

