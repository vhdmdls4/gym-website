import { GlobeIcon } from '@radix-ui/react-icons'
import { Flex, Text } from '@radix-ui/themes'
import TabsMenu from './components/TabsMenu'
import HamburguerMenu from './components/HamburguerMenu'

type Props = {}

export default function AppHeader({}: Props) {
  return (
    <header className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 pt-5">
      <Flex justify={'between'}>
        <Flex justify={'center'} gap={'3'} align={'center'}>
          {' '}
          <GlobeIcon width={30} height={30} />
          <Text weight={'medium'}>Strong Fitness</Text>
        </Flex>

        <TabsMenu />
        <HamburguerMenu />
      </Flex>
    </header>
  )
}
