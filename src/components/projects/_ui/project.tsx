import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkIcon } from '@/shared/icons/icons'

interface IProject {
  id: number
  title: string
  image: string
  description: string
  link: string
  tagline: string
}

interface IProps {
  project: IProject
  index: number
  className?: string
}

export const Project: React.FC<IProps> = ({ project, index }) => {
  return (
    <Link target={'_blank'} href={project.link}>
      <div className='h-full cursor-pointer group relative border border-border rounded-lg shadow-lg overflow-hidden'>
        <div className='relative flex overflow-hidden'>
          <Image
            width={600}
            height={320}
            className='w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 lg:h-80'
            src={project.image}
            alt={project.title + ' image'}
          />
          <div className='absolute  inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <span className='flex gap-2 items-center text-lg mb-1 font-bold text-foreground sm:mb-4 sm:text-2xl lg:text-3xl '>
              You can see project <LinkIcon />
            </span>
            <p className='text-white font-light text-xs text-center px-2 transition-all duration-500 ease-in-out sm:px-4 sm:text-lg '>
              {project.description}
            </p>
          </div>
        </div>

        <div className='flex px-2.5 py-3 gap-4 justify-between items-center bg-secondary backdrop-blur-lg shadow-lg sm:p-4 lg:p-6 lg:h-full lg:max-h-28 xl:h-fit'>
          <div
            className='absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl'
            aria-hidden='true'
          >
            <div
              className='relative w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-80'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>

          <div className={'flex flex-col'}>
            <h3
              className={'text-md font-bold text-white sm:text-lg md:text-xl'}
            >
              {project.title}
            </h3>
            <p className={'text-xs text-foreground/80 font-normal sm:text-md'}>
              {project.tagline}
            </p>
          </div>

          <div className='flex justify-center items-center w-full h-7 max-h-7 max-w-7 rounded font-normal border-white/40 border text-foreground sm:max-w-8 sm:h-8   sm:max-h-8'>
            <h2 className='text-xs sm:text-md '>{index + 1}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}
