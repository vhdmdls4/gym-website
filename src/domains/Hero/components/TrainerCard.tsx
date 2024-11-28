import {
  Avatar,
  Box,
  Card,
  Flex,
  IconButton,
  Text,
  Badge
} from '@radix-ui/themes'
import { MdPeople } from 'react-icons/md'
import { PlusIcon } from '@radix-ui/react-icons'

export default function TrainerCard() {
  return (
    <Box position={'absolute'} maxWidth="280px">
      <Card>
        <Flex gap="3" align="center" direction={'column'}>
          <Flex gap={'3'} align={'center'}>
            <MdPeople size={30} />
            <Box>
              <Text as="div" size="2" weight="regular">
                Experience trainer
              </Text>
            </Box>
            <IconButton size="1" variant="soft" highContrast color="gray">
              <PlusIcon width="15" height="15" />
            </IconButton>
          </Flex>
          <Flex className="-space-x-3 rtl:space-x-revers">
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              radius="full"
              fallback="T"
              className="border-2 border-white dark:border-gray-800"
            />
            <Avatar
              size="3"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              radius="full"
              fallback="T"
              className="border-2 border-white dark:border-gray-800"
            />
            <Avatar
              size="3"
              src="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              radius="full"
              fallback="T"
              className="border-2 border-white dark:border-gray-800"
            />
            <Avatar
              size="3"
              src="https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              radius="full"
              fallback="T"
              className="border-2 border-white dark:border-gray-800"
            />
            <Badge size="1" color="iris" variant="solid">
              100+
            </Badge>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
