'use client'

import Image from 'next/image'

import { useTranslations, useLocale } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="section-content">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pretty text-foreground leading-tight mb-4 sm:mb-6 ${locale === 'vi' ? 'font-vietnamese-heading' : ''
                }`}
            >
              {t('title')}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#research" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg text-center font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                {t('cta')}
              </a>
              <a href="#about" className="px-6 sm:px-8 py-2.5 sm:py-3 border border-primary text-primary rounded-lg text-center font-semibold hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base">
                {t('learnMore')}
              </a>
            </div>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 section-content">
            <Image
              src="/ssme-lab-logo.webp"
              alt="SSME LAB"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
