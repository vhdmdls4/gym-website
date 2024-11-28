import { Button, Flex, Text } from '@radix-ui/themes'
import TabsMenu from './components/TabsMenu'
import { GiWeightLiftingUp } from 'react-icons/gi'
import Sidebar from './components/Sidebar'
import Show from '@/components/solidjs/Show'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

export default function AppHeader({}: Props) {
  const navigate = useNavigate()
  return (
    <header className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 pt-5">
      <Flex justify="between">
        <Flex justify={'center'} gap={'3'} align={'center'}>
          {' '}
          <GiWeightLiftingUp size={30} />
          <Text size={'5'} weight={'medium'}>
            Strong Fitness
          </Text>
        </Flex>
        {/* <TabsMenu /> */}
        {/* <div className="lg:hidden block">
          <Sidebar />
        </div> */}
        <div className="block">
          <Button
            size="4"
            variant="solid"
            highContrast
            color="gray"
            onClick={() => navigate('/gym-website/join-us')}
          >
            Register
          </Button>
        </div>
      </Flex>
    </header>
  )
}
