import { Box, Flex, Grid, Heading } from '@radix-ui/themes'
import PlanTable from './components/PlanTable'

export default function Plans() {
  return (
    <Flex direction={'column'} gapY={'4'}>
      <Flex direction={'column'}>
        <Heading as="h3" size={'6'} weight={'medium'} align={'center'}>
          Come train in the best gym in town, with the strongest athletes and
          the best equipment!
        </Heading>
        <Heading as="h5" size={'3'} weight={'medium'} align={'center'}>
          Choose your plan and start your journey today!
        </Heading>
      </Flex>

      <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
        <Box mt={{ lg: '104px' }}>
          <div>
            <p className="leading-relaxed text-lg">
              At Strong Fitness, we provide a comprehensive fitness experience
              tailored to your needs. Our membership plans offer a variety of
              amenities and perks to help you achieve your fitness goals.
            </p>
            <p className="leading-relaxed text-lg mt-3">
              Choose from our <strong>Plus</strong> or <strong>Premium</strong>{' '}
              plans to access additional benefits and elevate your fitness
              journey.
            </p>
          </div>
        </Box>
        <PlanTable />
      </Grid>
    </Flex>
  )
}
