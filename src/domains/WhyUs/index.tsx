import { Avatar, Box, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'

export default function WhyUs() {
  return (
    <>
      <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto">
        <Heading as="h1" size={'9'} weight={'medium'}>
          Why Us
        </Heading>
        <Box maxWidth={'298px'}>
          <Card className="p-6">
            <Heading
              as="h1"
              size={'5'}
              weight={'medium'}
              align={'center'}
              mb={'3'}
            >
              Experiences
            </Heading>
            <Flex gap="3" align="center" direction={'column'}>
              <Grid
                rows={'2'}
                columns={'2'}
                justify={'center'}
                align={'center'}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1675364965052-fdb98d1ddd67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdhY2hhbWVudG98ZW58MHx8MHx8fDA%3D"
                  alt="Teodros Girmay"
                  width="100%"
                  className="rounded-2xl col-span-12"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1675364965052-fdb98d1ddd67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdhY2hhbWVudG98ZW58MHx8MHx8fDA%3D"
                  alt="Teodros Girmay"
                  width="250"
                  className="rounded-2xl"
                />
              </Grid>

              <Box>
                <Text as="div" size="2" weight="regular">
                  Teodros Girmay
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Why Us
        </Heading>
        <Box></Box>
      </Grid>
      <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
        <Heading as="h1" size={'9'} weight={'medium'}>
          Why Us
        </Heading>
        <Flex
          direction={'column'}
          gapY={'3'}
          justify={'center'}
          maxWidth={'160px'}
        >
          <Avatar
            size="9"
            src="https://plus.unsplash.com/premium_photo-1675364965052-fdb98d1ddd67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdhY2hhbWVudG98ZW58MHx8MHx8fDA%3D"
            radius="small"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold" align={'center'}>
              Teodros Girmay
            </Text>
          </Box>
        </Flex>

        <Heading as="h1" size={'9'} weight={'medium'}>
          Why Us
        </Heading>
        <Box></Box>
      </Grid>
    </>
  )
}
