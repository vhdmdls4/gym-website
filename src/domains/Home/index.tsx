import { Flex } from '@radix-ui/themes'
import Hero from '../Hero'
import Plans from '../Plans'

export default function Home() {
  return (
    <Flex direction={'column'}>
      <Hero />
      <Plans />
    </Flex>
  )
}
