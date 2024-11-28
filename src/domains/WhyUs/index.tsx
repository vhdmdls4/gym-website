import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text
} from '@radix-ui/themes'
import { GiBiceps } from 'react-icons/gi'
import { HiMiniPuzzlePiece } from 'react-icons/hi2'
import { RiMentalHealthFill, RiPsychotherapyFill } from 'react-icons/ri'

export default function WhyUs() {
  return (
    <>
      <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto" mb={'9'}>
        <Heading as="h3" size={'6'} weight={'medium'}>
          Why Us
        </Heading>
        <Box maxWidth={'400px'}></Box>
      </Grid>
      <Container minWidth={'100dvw'}>
        <Section className="bg-gray-800">
          <Grid width="w-screen">
            <Flex
              direction={'column'}
              justify={'center'}
              align={'center'}
              className="mx-auto"
            >
              <Box width={'100%'} mb={'5'} px={'5'} maxWidth={'1100px'}>
                <Heading
                  as="h3"
                  size={'7'}
                  weight={'medium'}
                  align={'center'}
                  mb={'3'}
                >
                  Stay Strong and Fit for a Better Life
                </Heading>
                <Text
                  align={'center'}
                  className="text-center"
                  as="p"
                  wrap={'wrap'}
                >
                  Becoming stronger and maintaining a fit lifestyle brings
                  numerous benefits that go beyond just physical appearance. It
                  boosts productivity, enhances overall health, increases
                  attractiveness, and improves mental well-being. By integrating
                  fitness into your daily routine, you can transform your life
                  in various positive ways. Explore the cards below to discover
                  the amazing impact of fitness on different aspects of your
                  life.
                </Text>
              </Box>
            </Flex>
            <Flex
              direction={{ sm: 'column', md: 'row' }}
              justify={'center'}
              align={'center'}
              gap={'5'}
              wrap={'wrap'}
              mb={'5'}
              px={'5'}
            >
              <Box width={'396px'} height={'316px'}>
                <Card className="flex flex-col align-middle justify-center w-full h-full">
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    align={'center'}
                    height={'100%'}
                  >
                    {/* <Avatar
                      size="7"
                      src="https://pbs.twimg.com/profile_images/1438920716781462531/4Z7tjV1-_400x400.jpg"
                      radius="small"
                      fallback="T"
                      className=""
                    /> */}
                    <HiMiniPuzzlePiece size={'100'} />

                    <Heading
                      className="p-5"
                      as="h3"
                      size={'9'}
                      weight={'medium'}
                    >
                      20%
                    </Heading>
                    <Text className="text-center" as="p" wrap="pretty">
                      increased of Productivity. Regular exercise improves
                      focus, energy levels, and more.
                    </Text>
                  </Flex>
                </Card>
              </Box>
              <Box width={'396px'} height={'316px'}>
                <Card className="flex justify-center w-full h-full p-2 align-middle">
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    align={'center'}
                    height={'100%'}
                  >
                    {/* <Avatar
                      size="7"
                      src="https://pbs.twimg.com/profile_images/1438920716781462531/4Z7tjV1-_400x400.jpg"
                      radius="small"
                      fallback="T"
                      className=""
                    /> */}
                    <RiMentalHealthFill size={'100'} />
                    <Heading
                      className="p-5"
                      as="h3"
                      size={'9'}
                      weight={'medium'}
                    >
                      35%
                    </Heading>
                    <Text className="text-center" as="p" wrap="pretty">
                      improvement in mental health. Exercise reduces stress and
                      anxiety.
                    </Text>
                  </Flex>
                </Card>
              </Box>

              <Box width={'396px'} height={'316px'}>
                <Card className="flex justify-center w-full h-full p-2 align-middle">
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    align={'center'}
                    height={'100%'}
                  >
                    {/* <Avatar
                      size="7"
                      src="https://pbs.twimg.com/profile_images/1438920716781462531/4Z7tjV1-_400x400.jpg"
                      radius="small"
                      fallback="T"
                      className=""
                    /> */}
                    <GiBiceps size={'100'} />
                    <Heading
                      className="p-5"
                      as="h3"
                      size={'9'}
                      weight={'medium'}
                    >
                      25%
                    </Heading>
                    <Text className="text-center" as="p" wrap="pretty">
                      boost in attractiveness. Fitness enhances physical
                      appearance and confidence.
                    </Text>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          </Grid>
        </Section>
      </Container>
    </>
  )
}
