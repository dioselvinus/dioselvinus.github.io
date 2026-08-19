import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import { useLanguage } from './context/LanguageContext'

function App() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        {t('app.skip')}
      </a>
      <Navigation />
      <main id="main-content" className="flex-1">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App