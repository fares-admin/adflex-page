import { useEffect, useRef, useState } from 'react'

import { LANGUAGE_COOKIE_KEY } from '@/lib'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import ArrowDropdownIcon from './icons/ArrowDropdownIcon'

const languages = [
  { language: 'en', name: 'English', icon: '/images/flag/uk-flag.svg' },
  { language: 'vi', name: 'Tiếng Việt', icon: '/images/flag/vn-flag.svg' },
]

function DropDownItem({ label = '', flag }: { label: string; flag: string }) {
  return (
    <div className="flex items-center gap-3 px-4">
      <div className="relative  aspect-square w-8">
        <Image src={flag} fill alt="flag-icon" />
      </div>
      <div className="cursor-pointer hover:text-primary whitespace-nowrap">{label}</div>
    </div>
  )
}

function SelectLanguageDropDown({
  className = '',
  color = '#fff',
}: {
  className?: string
  color?: string
}) {
  const node = useRef(null)
  const [isOpen, toggleOpen] = useState(false)
  const [languageSelected, setLanguageSelected] = useState(languages[1])

  const [cookies, setCookies] = useCookies([LANGUAGE_COOKIE_KEY])

  useEffect(() => {
    if (cookies.language && cookies.language === 'en') {
      setLanguageSelected(languages[0])
    } else {
      setLanguageSelected(languages[1])
    }
  }, [])

  const toggleOpenMenu = () => {
    toggleOpen(!isOpen)
  }

  const handleClickOutside = (e: any) => {
    // @ts-ignore
    if (node.current?.contains(e.target)) {
      return
    }
    toggleOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.2,
        delay: 0.05,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <motion.div className={`relative text-white ${className}`}>
      <div
        ref={node}
        onClick={toggleOpenMenu}
        className="flex items-center gap-3 p-2 cursor-pointer"
      >
        <div className="w-8 aspect-square relative">
          <Image fill src={languageSelected.icon} alt={languageSelected.name} />
        </div>
        <div className={`${isOpen && 'rotate-180'} smooth-transform `}>
          <ArrowDropdownIcon color={color} />
        </div>
      </div>

      <motion.div
        initial="exit"
        animate={isOpen ? 'enter' : 'exit'}
        variants={subMenuAnimate}
        className="absolute left-0 md:right-0 w-[150px] bg-black"
        style={{
          borderRadius: 15,
          transformOrigin: '50% -30px',
          zIndex: 1,
        }}
      >
        <div className="flex flex-col gap-4 py-4">
          {languages.map((lang) => (
            <div
              key={lang.language}
              onClick={() => {
                setCookies(LANGUAGE_COOKIE_KEY, lang.language)
                setLanguageSelected(lang)
              }}
            >
              <DropDownItem flag={lang.icon} label={lang.name} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SelectLanguageDropDown
