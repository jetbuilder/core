import Hero from '@/components/sections/hero'
import CaseStudies from '@/components/sections/case-studies'
import ValueProps from '@/components/sections/value-props'
import Product from '@/components/sections/product'
import Solutions from '@/components/sections/solutions'
import UseCases from '@/components/sections/use-cases'
import Enterprise from '@/components/sections/enterprise'
import Government from '@/components/sections/government'
import Security from '@/components/sections/security'
import Pricing from '@/components/sections/pricing'
import Developers from '@/components/sections/developers'
import Resources from '@/components/sections/resources'

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <ValueProps />
      <Product />
      <Solutions />
      <UseCases />
      {/* <Enterprise />
      <Government />
      <Security />
      <Pricing />
      <Developers />
      <Resources /> */}
    </>
  )
}

