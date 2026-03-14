import Hero from '@/components/sections/hero'
import Logos from '@/components/sections/logos'
import Crates from '@/components/sections/crates'
import Docs from '@/components/sections/docs'
import Product from '@/components/sections/product'
import Performance from '@/components/sections/performance'
import ControlPlane from '@/components/sections/control-plane'
import Testimonials from '@/components/sections/testimonials'
import SolutionExamples from '@/components/sections/solution-examples'
import UseCases from '@/components/sections/use-cases'
import WhySLMs from '@/components/sections/why-slms'
import Enterprise from '@/components/sections/enterprise'
import ModelFactory from '@/components/sections/model-factory'
import Security from '@/components/sections/security'
import Pricing from '@/components/sections/pricing'
import Resources from '@/components/sections/resources'

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Crates />
      <Docs />
      <Product />
      <Performance />
      <ControlPlane />
      <Testimonials />
      <SolutionExamples />
      <UseCases />
      <WhySLMs />
      <Enterprise />
      <ModelFactory />
      <Security />
      <Pricing />
      <Resources />
    </>
  )
}
