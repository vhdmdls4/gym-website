import { Box, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'

export default function InsideGymCard() {
  return (
    <Card className="p-6">
      <Heading as="h1" size={'5'} weight={'medium'} align={'center'} mb={'3'}>
        Experiences
      </Heading>
      <Flex gap="3" align="center" direction={'column'}>
        <Grid rows={'2'} columns={'2'} justify={'center'} align={'center'}>
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
  )
}
