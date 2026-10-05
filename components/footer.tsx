'use client'

import { useTranslations } from 'next-intl'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')
  const nav = useTranslations('nav')

  return (
    <footer id="contact" className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t('about')}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('description')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t('quickLinks')}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">{nav('about')}</a></li>
              <li><a href="#research" className="text-muted-foreground hover:text-primary transition-colors duration-300">{nav('research')}</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors duration-300">{nav('team')}</a></li>
              <li><a href="#publications" className="text-muted-foreground hover:text-primary transition-colors duration-300">{nav('publications')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">{t('contact')}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              <span className="font-semibold">Email:</span><br/>
              <a href="mailto:hanhdd@vnu.edu.vn" className="hover:text-primary">hanhdd@vnu.edu.vn</a>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              <span className="font-semibold">{t('location')}:</span><br/>
              {t('address')}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © {currentYear} VNU-UET-FIT Software and Systems Model Engineering Lab. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
