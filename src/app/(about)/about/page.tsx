import { IconUsers } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { BgcGradients, Container } from 'src/components'

import { Faqs } from '@/components/about/_ui/faqs'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/components/ui/utils'

export default function AboutPage() {
  const faqs = [
    {
      question: 'What services does your web studio offer?',
      answer:
        'We offer website development, UI/UX design, SEO optimization, branding creation, and ongoing website maintenance and support.'
    },
    {
      question: 'How long does it take to develop a website?',
      answer:
        "The average time to develop a website is between 4 to 12 weeks, depending on the project's complexity and client requirements."
    },
    {
      question: 'How is the cost of website development determined?',
      answer:
        'The cost is based on the scope and complexity of the project, required features, design, and the timeline for completion.'
    },
    {
      question: 'Do you provide SEO optimization services?',
      answer:
        'Yes, we offer comprehensive SEO optimization services to help your site rank higher in search engines and attract more target users.'
    },
    {
      question: 'What technologies do you use for website development?',
      answer:
        'We use modern technologies like HTML5, CSS3, JavaScript, React, and more to build responsive and high-performance websites.'
    },
    {
      question: 'Do you offer ongoing website maintenance?',
      answer:
        'Yes, we provide ongoing maintenance and support services to ensure your website stays updated, secure, and running smoothly.'
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Absolutely! We can redesign your existing website to improve its look, usability, and performance, while preserving its core content.'
    },
    {
      question: 'What is your approach to web design?',
      answer:
        'We focus on creating user-centered designs that are not only visually appealing but also provide an intuitive and seamless user experience.'
    },
    {
      question: 'How do you ensure the security of the websites you develop?',
      answer:
        'We implement best practices in web security, including SSL certificates, regular updates, secure coding practices, and regular security audits.'
    },
    {
      question: 'Do you offer e-commerce website development?',
      answer:
        'Yes, we specialize in developing e-commerce websites that are secure, scalable, and optimized for conversions.'
    }
  ]

  return (
    <div className={'relative isolate'}>
      <BgcGradients position={'top-left'} />

      <Container>
        <div
          className={cn(
            'text-card-foreground mb-3 border-border/60 bg-card/30 backdrop-blur rounded-lg border shadow-sm'
          )}
        >
          <div className={'flex justify-between p-4 border-b sm:p-6'}>
            <div className={''}>
              <span className={'block text-muted-foreground font-medium mb-2'}>
                Why Choose Us?
              </span>

              <h4 className={'text-2xl mb-4 md:text-4xl'}>
                Your Trusted Partner for You
              </h4>
            </div>

            <div
              className={
                'grid grid-cols-1 gap-2.5 sm:gap-7 sm:grid-cols-2 w-1/2'
              }
            >
              <Card
                className={
                  'text-card-foreground border-border/60 bg-card/30 backdrop-blur'
                }
              >
                <div className='p-4 mb-3 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-2'>
                  <IconUsers className='h-6 w-6 text-muted-foreground' />
                </div>

                <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
                  <span className={'block text-lg font-bold sm:text-2xl mb-3'}>
                    Expertise and Experience
                  </span>
                  <p className='text-sm font-normal text-muted-foreground'>
                    With many years of experience, I bring extensive knowledge
                    and expertise to each of our projects
                  </p>
                </div>
              </Card>
              <Card
                className={
                  'text-card-foreground border-border/60 bg-card/30 backdrop-blur'
                }
              >
                <div className='p-4 mb-3 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-2'>
                  <IconUsers className='h-6 w-6 text-muted-foreground' />
                </div>

                <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
                  <span className={'block text-lg font-bold sm:text-2xl mb-3'}>
                    Expertise and Experience
                  </span>
                  <p className='text-sm font-normal text-muted-foreground'>
                    With many years of experience, I bring extensive knowledge
                    and expertise to each of our projects
                  </p>
                </div>
              </Card>
              <Card
                className={
                  'text-card-foreground border-border/60 bg-card/30 backdrop-blur'
                }
              >
                <div className='p-4 mb-3 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-2'>
                  <IconUsers className='h-6 w-6 text-muted-foreground' />
                </div>

                <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
                  <span className={'block text-lg font-bold sm:text-2xl mb-3'}>
                    Expertise and Experience
                  </span>
                  <p className='text-sm font-normal text-muted-foreground'>
                    With many years of experience, I bring extensive knowledge
                    and expertise to each of our projects
                  </p>
                </div>
              </Card>
              <Card
                className={
                  'text-card-foreground border-border/60 bg-card/30 backdrop-blur'
                }
              >
                <div className='p-4 mb-3 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-2'>
                  <IconUsers className='h-6 w-6 text-muted-foreground' />
                </div>

                <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
                  <span className={'block text-lg font-bold sm:text-2xl mb-3'}>
                    Expertise and Experience
                  </span>
                  <p className='text-sm font-normal text-muted-foreground'>
                    With many years of experience, I bring extensive knowledge
                    and expertise to each of our projects
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div
          className={
            'flex flex-col gap-3 p-8 justify-between items-center rounded-xl mb-10 md:flex-row'
          }
        >
          <div className={'mb-10'}>
            <h4 className={'text-2xl mb-4 md:text-4xl'}>
              Join our Affiliate Program
            </h4>
            <p
              className={
                'font-normal text-sm text-secondary-foreground max-w-2xl mb-8 md:text-lg'
              }
            >
              Our Affiliate Program offers an exciting opportunity to earn
              commissions by promoting our top-notch construction and remodeling
              services. By joining, you’ll gain access to exclusive marketing
              materials and unique affiliate links to share with your network.
            </p>

            <Button
              variant={'outline'}
              className={'rounded-full w-full max-w-64 text-lg py-4 h-14'}
            >
              Start now
            </Button>
          </div>

          <div className={'h-full'}>
            <Image
              className={'rounded-xl w-full object-contain'}
              src={'/images/min.webp'}
              width={400}
              height={400}
              alt={'dsad'}
            />
          </div>
        </div>

        <Faqs faqs={faqs} />
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
