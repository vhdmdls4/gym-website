import { Flex } from '@radix-ui/themes'
import Hero from '../Hero'
import Plans from '../Plans'
import WhyUs from '../WhyUs'
import { JoinUs } from '../JoinUs'
import AboutUs from '../AboutUs'

export default function Home() {
  return (
    <Flex direction={'column'} gapY={'8'}>
      <Hero />
      <Plans />
      <WhyUs />
      <JoinUs />
      <AboutUs />
    </Flex>
  )
}
