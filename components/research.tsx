'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export function Research() {
  const [activeTab, setActiveTab] = useState('core')
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('research')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const coreAreas = [
    {
      titleKey: 'core.modeling.title',
      descKey: 'core.modeling.description'
    },
    {
      titleKey: 'core.transformation.title',
      descKey: 'core.transformation.description'
    },
    {
      titleKey: 'core.qa.title',
      descKey: 'core.qa.description'
    }
  ]

  const emergingAreas = [
    {
      titleKey: 'emerging.digital_twins.title',
      descKey: 'emerging.digital_twins.description'
    },
    {
      titleKey: 'emerging.llm.title',
      descKey: 'emerging.llm.description'
    },
    {
      titleKey: 'emerging.mas.title',
      descKey: 'emerging.mas.description'
    }
  ]

  return (
    <section id="research" className="py-12 sm:py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t('title')}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6 sm:mb-8 md:mb-12" />

          <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-border overflow-x-auto">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-3 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-sm transition-all duration-300 relative whitespace-nowrap ${
                activeTab === 'core'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('coreTitle')}
              {activeTab === 'core' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('emerging')}
              className={`px-3 sm:px-6 py-2 sm:py-3 font-semibold text-xs sm:text-sm transition-all duration-300 relative whitespace-nowrap ${
                activeTab === 'emerging'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('emergingTitle')}
              {activeTab === 'emerging' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {(activeTab === 'core' ? coreAreas : emergingAreas).map((area, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 bg-white dark:bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-1 w-8 bg-gradient-to-r from-primary to-accent rounded-full mb-3 sm:mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t(area.titleKey)}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t(area.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
