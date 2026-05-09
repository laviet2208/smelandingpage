import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'vi'
      ? 'SME Lab - Kỹ Thuật Mô Hình Phần Mềm'
      : 'SME Lab - Software Model Engineering',
    description: locale === 'vi'
      ? 'Nâng cao phát triển phần mềm thông qua kỹ thuật tự động hóa và thiết kế dựa trên mô hình tại VNU-UET-FIT'
      : 'Advancing software development through automated software engineering and model-driven design at VNU-UET-FIT',
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages({locale})

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
