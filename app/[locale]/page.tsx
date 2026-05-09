import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Research } from '@/components/research'
import { Team } from '@/components/team'
import { Publications } from '@/components/publications'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Research />
        <Team />
        <Publications />
        <Footer />
      </div>
    </main>
  )
}
