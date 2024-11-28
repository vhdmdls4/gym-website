import { Box, Flex, Grid, Heading } from '@radix-ui/themes'

export default function AboutUs() {
  return (
    <Flex direction={'column'}>
      <Heading as="h3" size={'6'} weight={'medium'}>
        Come train in the best gym in town, with the strongest athletes and the
        best equipment! Choose your plan and start your journey today!
      </Heading>
      <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
        <Box>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. VIVAMUS
          VELIT, VITAE LOREM VEL, VENENATIS VITAE, VEHICULA VITAE, LECTUS.
        </Box>
      </Grid>
    </Flex>
  )
}
