import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { MdTimer } from 'react-icons/md'

export default function TrainingCard() {
  return (
    <Box position={'absolute'} bottom={'5'} left="9" maxWidth="280px">
      <Card className="space-y-3">
        <Flex gap="3" align="center">
          <MdTimer size={30} />
          <Box>
            <Text as="div" size="2" weight="regular">
              Repetition training
            </Text>
          </Box>
        </Flex>
        <Text as="div" size="2" weight="regular" align={'left'}>
          20 minutes
        </Text>
      </Card>
    </Box>
  )
}
