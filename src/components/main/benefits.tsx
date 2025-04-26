import {
  IconCode,
  IconExternalLink,
  IconHeartHandshake,
  IconListDetails
} from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

import { Card } from '@/components/ui/card'

import {
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  WordPressIcon
} from '@/shared/icons/icons'

interface IProps {
  className?: string
}

export const Benefits: React.FC<IProps> = ({ className }) => {
  return (
    <section
      id={'benefits'}
      className={'grid grid-cols-1 mb-20 gap-5 md:grid-cols-3'}
    >
      <Card
        className={
          'flex flex-col justify-between text-card-foreground border-border/60 bg-card/30 backdrop-blur'
        }
      >
        <div>
          <div className='p-4 pb-2 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-4'>
            <span className='text-lg font-semibold text-foreground tracking-tight leading-none'>
              Over 70+ successful projects
            </span>
            <IconListDetails className='h-5 w-5' />
          </div>

          <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
            <p className='text-sm text-muted-foreground font-normal'>
              71+ successful projects for clients across industries. We create
              solutions that work and deliver results
            </p>

            <ul
              className={
                'text-sm font-normal text-muted-foreground mt-4 list-disc list-inside'
              }
            >
              <li>We choose the tools that are ideal for your project</li>
              <li>Matching technology to your business objectives</li>
              <li>From websites to complex web applications</li>
            </ul>
          </div>
        </div>

        <div className={'flex justify-between p-4 border-t sm:px-6 sm:pb-4'}>
          <div className={'flex gap-4 text-muted-foreground'}>
            <ReactIcon />
            <NextJSIcon />
            <JavaScriptIcon />
            <WordPressIcon />
          </div>

          <Link
            href={'/about'}
            className={
              'flex gap-0.5 items-center text-xs transition cursor-pointer underline hover:no-underline hover:text-muted-foreground'
            }
          >
            <IconExternalLink className={'w-4'} /> Learn more
          </Link>
        </div>
      </Card>
      <Card
        className={
          'flex flex-col justify-between text-card-foreground border-border/60 bg-card/30 backdrop-blur'
        }
      >
        <div>
          <div className='p-4 pb-2 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-4'>
            <span className='text-lg font-semibold text-foreground tracking-tight leading-none'>
              Possibility for further support
            </span>
            <IconHeartHandshake className='h-5 w-5' />
          </div>

          <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
            <p className='text-sm text-muted-foreground font-normal'>
              We not only create projects, but also support them after
              completion by providing solutions for updates, improvements, and
              assistance when needed.
            </p>

            <ul
              className={
                'text-sm font-normal text-muted-foreground mt-4 list-disc list-inside'
              }
            >
              <li>We choose the tools that are ideal for your project</li>
              <li>Matching technology to your business objectives</li>
              <li>From websites to complex web applications</li>
            </ul>
          </div>
        </div>

        <div className={'flex justify-between p-4 border-t sm:px-6 sm:pb-4'}>
          <div className={'flex gap-4 text-muted-foreground'}>
            <ReactIcon />
            <NextJSIcon />
            <JavaScriptIcon />
            <WordPressIcon />
          </div>

          <Link
            href={'/about'}
            className={
              'flex gap-0.5 items-center text-xs transition cursor-pointer underline hover:no-underline hover:text-muted-foreground'
            }
          >
            <IconExternalLink className={'w-4'} /> Learn more
          </Link>
        </div>
      </Card>

      <Card
        className={
          'text-card-foreground border-border/60 bg-card/30 backdrop-blur'
        }
      >
        <div className='p-4 pb-2 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-4'>
          <span className='text-lg font-semibold text-foreground tracking-tight leading-none'>
            Modern technology for any project
          </span>
          <IconCode className='h-5 w-5' />
        </div>

        <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
          <p className='text-sm text-muted-foreground font-normal'>
            We specialize in a diverse range of technologies, covering
            everything from modern frontend frameworks like React to popular CMS
            platforms such as WordPress and Tilda
          </p>

          <ul
            className={
              'text-sm font-normal text-muted-foreground mt-4 list-disc list-inside'
            }
          >
            <li>We choose the tools that are ideal for your project</li>
            <li>Matching technology to your business objectives</li>
            <li>From websites to complex web applications</li>
          </ul>
        </div>

        <div className={'flex justify-between p-4 border-t sm:px-6 sm:pb-4'}>
          <div className={'flex gap-4 text-muted-foreground'}>
            <ReactIcon />
            <NextJSIcon />
            <JavaScriptIcon />
            <WordPressIcon />
          </div>

          <Link
            href={'/about'}
            className={
              'flex gap-0.5 items-center text-xs transition cursor-pointer underline hover:no-underline hover:text-muted-foreground'
            }
          >
            <IconExternalLink className={'w-4'} /> Learn more
          </Link>
        </div>
      </Card>
    </section>
  )
}
