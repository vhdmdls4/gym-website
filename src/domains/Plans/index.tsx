import { Box, Grid, Heading } from '@radix-ui/themes'
import TablePlans from './components/TablePlans'

export default function Plans() {
  return (
    <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
      <Box>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Plans
        </Heading>
        <div className="mt-3">
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
      <TablePlans />
    </Grid>
  )
}
