'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('about')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t('title')}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6 sm:mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{t('leader')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  <span className="font-semibold">Assoc. Prof. Duc-Hanh Dang</span> leads the SME Lab with extensive expertise in software model engineering and automated software engineering.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{t('team')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {t('teamInfo')}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">Institution</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Part of the Vietnam National University - University of Engineering and Technology (VNU-UET), Faculty of Information Technology (FIT)
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  We are committed to advancing the frontier of software engineering through rigorous research in automated software engineering grounded in software model engineering. Our work bridges the gap between theoretical models and practical software development, creating innovative solutions for the industry.
                </p>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We focus on creating intelligent, automated approaches to software development that leverage domain-specific languages, model transformations, and AI-driven techniques to improve software quality and development efficiency.
                </p>
              </div>
            </div>

            <div className="relative mt-6 md:mt-0">
              <div className="flex flex-col items-center md:sticky md:top-32">
                <div className="relative w-40 h-56 sm:w-48 sm:h-64 rounded-lg overflow-hidden shadow-lg border-4 border-primary/20">
                  <Image
                    src="/prof-hanh.png"
                    alt="Assoc. Prof. Duc-Hanh Dang"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 sm:mt-4 font-semibold text-center text-foreground text-sm sm:text-base">Assoc. Prof. Duc-Hanh Dang</p>
                <p className="text-xs sm:text-sm text-muted-foreground text-center">Lab Director</p>
                <a href="mailto:hanhdd@vnu.edu.vn" className="mt-2 sm:mt-3 text-xs sm:text-sm text-primary hover:underline">
                  hanhdd@vnu.edu.vn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
