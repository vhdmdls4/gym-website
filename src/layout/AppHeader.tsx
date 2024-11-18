import { Flex, Text } from '@radix-ui/themes'
import TabsMenu from './components/TabsMenu'
import { GiWeightLiftingUp } from 'react-icons/gi'
import Sidebar from './components/Sidebar'
import Show from '@/components/solidjs/Show'

type Props = {}

export default function AppHeader({}: Props) {
  return (
    <header className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 pt-5">
      <Flex justify={'between'}>
        <Flex justify={'center'} gap={'3'} align={'center'}>
          {' '}
          <GiWeightLiftingUp size={30} />
          <Text size={'5'} weight={'medium'}>
            Strong Fitness
          </Text>
        </Flex>
        <TabsMenu />
        <div className="visible lg:invisible">
          <Sidebar />
        </div>
        {/* <HamburguerMenu /> */}
      </Flex>
    </header>
  )
}
