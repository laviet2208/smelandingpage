'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('team')
  const locale = useLocale()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 ${locale === "vi" ? "font-vietnamese-heading" : ""
              }`}
          >
            {t("title")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6 sm:mb-8 md:mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="group p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 text-lg sm:text-2xl">
                👨‍🎓
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">3</h3>
              <p className="text-base sm:text-lg font-semibold text-primary mb-2">{t('professors')}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('professorsDescription')}</p>
            </div>

            <div className="group p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 text-lg sm:text-2xl">
                🔬
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">5</h3>
              <p className="text-base sm:text-lg font-semibold text-primary mb-2">{t('researchers')}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('researchersDescription')}</p>
            </div>

            <div className="group p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300">
              <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 text-lg sm:text-2xl">
                🎯
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">12-15</h3>
              <p className="text-base sm:text-lg font-semibold text-primary mb-2">{t('students')}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('studentsDescription')}</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-primary mb-3 sm:mb-4">{t('labContact')}</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p className="text-foreground">
                    <span className="font-semibold">{t('labHead')}:</span><br />
                    {t('labHeadName')}
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">{t('email')}:</span><br />
                    hanhdd@vnu.edu.vn
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-primary mb-3 sm:mb-4">{t('institution')}</h3>
                <p className="text-sm sm:text-base text-foreground">
                  <span className="font-semibold">VNU-UET-FIT</span><br />
                  {t('institutionLine1')}<br />
                  {t('institutionLine2')}<br />
                  {t('institutionLine3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
