import { Flex } from '@radix-ui/themes'
import {
  SiAdidas,
  SiNewbalance,
  SiNike,
  SiPuma,
  SiThunderstore,
  SiUnderarmour
} from 'react-icons/si'
import { IoMdFitness } from 'react-icons/io'

export default function PartnersSection() {
  return (
    <Flex
      align={{ initial: 'center', md: 'start' }}
      my={'5'}
      direction={'column'}
      gridRow={{ initial: '3', lg: '2' }}
    >
      <div className="hidden lg:block">Collabs with</div>
      <Flex gap={'3'} wrap={'wrap'}>
        <SiAdidas size={60} />
        <SiNike size={60} />
        <SiNewbalance size={60} />
        <IoMdFitness size={60} />
        <SiPuma size={60} />
        <SiUnderarmour size={60} />
        <SiThunderstore size={60} />
      </Flex>
    </Flex>
  )
}
