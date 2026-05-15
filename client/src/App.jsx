import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

const ParaQuem      = lazy(() => import('./components/ParaQuem'))
const Fluxo         = lazy(() => import('./components/Fluxo'))
const WorkflowDemo  = lazy(() => import('./components/WorkflowDemo'))
const CompareSlides = lazy(() => import('./components/CompareSlides'))
const Programacao   = lazy(() => import('./components/Programacao'))
const Medos         = lazy(() => import('./components/Medos'))
const Modules       = lazy(() => import('./components/Modules'))
const ResultadosReais = lazy(() => import('./components/ResultadosReais'))
const Testimonials  = lazy(() => import('./components/Testimonials'))
const Price         = lazy(() => import('./components/Price'))
const Guarantee     = lazy(() => import('./components/Guarantee'))
const Instructor    = lazy(() => import('./components/Instructor'))
const FAQ           = lazy(() => import('./components/FAQ'))
const FinalCTA      = lazy(() => import('./components/FinalCTA'))
const Footer        = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={null}>
        <WorkflowDemo />
        <CompareSlides />
        <ParaQuem />
        <Fluxo />
        <Programacao />
        <Medos />
        <Modules />
        <ResultadosReais />
        <Testimonials />
        <Price />
        <Guarantee />
        <Instructor />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </>
  )
}
