'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return
    
    let pathWithoutLocale = pathname
    if (pathname.startsWith('/en') || pathname.startsWith('/vi')) {
      pathWithoutLocale = pathname.slice(3) || '/'
    }
    
    setMobileMenuOpen(false)
    startTransition(() => router.push(`/${newLocale}${pathWithoutLocale}${window.location.search}${window.location.hash}`, { scroll: false }))
  }

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#research', label: t('research') },
    { href: '#team', label: t('team') },
    { href: '#publications', label: t('publications') },
    { href: '#contact', label: t('contact') }
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} aria-label="SSME LAB" className="flex items-center gap-2 group flex-shrink-0 mr-3 lg:mr-6">
          <div className="h-10 w-10 relative flex-shrink-0">
            <Image
              src="/ssme-lab-logo.webp"
              alt="SSME LAB Logo"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg text-primary hidden sm:inline whitespace-nowrap">SSME LAB</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 bg-muted rounded-lg p-1">
            <button
              onClick={() => handleLanguageChange('en')}
              disabled={isPending}
              aria-pressed={locale === 'en'}
              aria-label="English"
              className={`px-2.5 py-1 rounded text-sm font-medium transition-all ${
                locale === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('vi')}
              disabled={isPending}
              aria-pressed={locale === 'vi'}
              aria-label="Tiếng Việt"
              className={`px-2.5 py-1 rounded text-sm font-medium transition-all ${
                locale === 'vi'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              VI
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t('menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden text-primary p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="lg:hidden bg-white dark:bg-slate-900 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
