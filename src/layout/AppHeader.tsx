import { GlobeIcon } from '@radix-ui/react-icons'
import { Flex } from '@radix-ui/themes'
import TabsMenu from './components/TabsMenu'
import HamburguerMenu from './components/HamburguerMenu'

type Props = {}

export default function AppHeader({}: Props) {
  return (
    <header className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 pt-5">
      <Flex justify={'between'}>
        <GlobeIcon height={22} width={22} />
        <TabsMenu />
        <HamburguerMenu />
      </Flex>
    </header>
  )
}
