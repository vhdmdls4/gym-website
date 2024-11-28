import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function GuideCard() {
  return (
    <Box position="absolute" right="2" maxWidth="290px" className="inset-y-2/4">
      <Card className="flex">
        <Flex gapX={'3'}>
          <Text
            as="div"
            size="2"
            weight="regular"
            className="flex"
            align={'right'}
          >
            <div className="flex justify-start">
              <a href="#">
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
            Start building your core muscles with this quick start guide.
          </Text>
        </Flex>
      </Card>
    </Box>
  )
}
