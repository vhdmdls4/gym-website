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

export default function WhyUs() {
  return (
    <>
      <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto" mb={'9'}>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Why Us
        </Heading>
        <Box maxWidth={'400px'}></Box>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Why Us
        </Heading>
        <Box></Box>
      </Grid>
      <Container minWidth={'100dvw'}>
        <Section className="bg-gray-800">
          <Grid
            rows={{ sm: '1', md: '2' }}
            gap="5"
            width="w-screen"
            height={'650px'}
          >
            <Flex
              direction={'column'}
              justify={'center'}
              align={'center'}
              width={'500px'}
              className="mx-auto"
            >
              <Box>
                <Heading as="h2" size={'7'} weight={'medium'}>
                  Stay Strong and Fit for a Better Life
                </Heading>
                <Text className="w-100">
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
            >
              <Box width={'396px'} height={'316px'}>
                <Card className="w-full h-full" style={{ padding: '2rem' }}>
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    align={'center'}
                  >
                    <Avatar
                      size="7"
                      src="https://pbs.twimg.com/profile_images/1438920716781462531/4Z7tjV1-_400x400.jpg"
                      radius="small"
                      fallback="T"
                      className=""
                    />
                    <Heading
                      className="p-5"
                      as="h3"
                      size={'9'}
                      weight={'medium'}
                    >
                      20%
                    </Heading>
                  </Flex>

                  <Text>
                    increased of overall Productivity. Regular exercise improves
                    focus, energy levels, and more.
                  </Text>
                </Card>
              </Box>
              <Box width={'396px'} height={'316px'}>
                <Card className="w-full h-full" style={{ padding: '2rem' }}>
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    align={'center'}
                  >
                    <Avatar
                      size="7"
                      src="https://pbs.twimg.com/profile_images/1438920716781462531/4Z7tjV1-_400x400.jpg"
                      radius="small"
                      fallback="T"
                      className=""
                    />
                    <Heading
                      className="p-5"
                      as="h3"
                      size={'9'}
                      weight={'medium'}
                    >
                      35%
                    </Heading>
                  </Flex>
                  <Text>
                    improvement in mental health. Exercise releases endorphins,
                    reducing stress and anxiety.
                  </Text>
                </Card>
              </Box>

              <Box width={'396px'} height={'316px'}>
                <Card className="w-full h-full" style={{ padding: '2rem' }}>
                  <Flex
                    justify={'center'}
                    direction={'column'}
                    align={'center'}
                  >
                    <Avatar
                      size="7"
                      src="https://pbs.twimg.com/profile_images/1438920716781462531/4Z7tjV1-_400x400.jpg"
                      radius="small"
                      fallback="T"
                      className=""
                    />
                    <Heading
                      className="p-5"
                      as="h3"
                      size={'9'}
                      weight={'medium'}
                    >
                      25%
                    </Heading>
                  </Flex>
                  <Text>
                    boost in attractiveness. Fitness enhances physical
                    appearance and confidence.
                  </Text>
                </Card>
              </Box>
            </Flex>
          </Grid>
        </Section>
      </Container>
    </>
  )
}
