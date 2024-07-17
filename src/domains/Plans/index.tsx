import { Box, Grid, Heading } from '@radix-ui/themes'
import TablePlans from './components/TablePlans'

export default function Plans() {
  return (
    <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
      <Box>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Plans
        </Heading>
        <div className="my-3">
          <p>
            At our gym, we believe in providing our members with a comprehensive
            fitness experience tailored to their needs. Our membership plans
            offer a variety of amenities and perks designed to help you achieve
            your fitness goals. Choose from our Plus or Premium plans to access
            additional benefits.
          </p>
        </div>
      </Box>
      <TablePlans />
    </Grid>
  )
}
