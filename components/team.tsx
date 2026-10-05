'use client'


import { useTranslations, useLocale } from 'next-intl'
import { CoreMembers } from '@/components/core-members'

export function Team() {
  const t = useTranslations('team')
  const locale = useLocale()


  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-content">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 ${locale === "vi" ? "font-vietnamese-heading" : ""
              }`}
          >
            {t("title")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6 sm:mb-8 md:mb-12" />

          <CoreMembers />

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
