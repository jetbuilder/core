import Hero from '@/components/sections/hero'
import SolutionExamples from '@/components/sections/solution-examples'
import Product from '@/components/sections/product'
import UseCases from '@/components/sections/use-cases'
import Enterprise from '@/components/sections/enterprise'
import Security from '@/components/sections/security'
import Pricing from '@/components/sections/pricing'
import Resources from '@/components/sections/resources'

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionExamples />
      <Product />
      <UseCases />
      <Enterprise />
      <Security />
      <Pricing />
      <Resources />
    </>
  )
}

