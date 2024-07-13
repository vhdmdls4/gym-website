import { Grid, Heading } from '@radix-ui/themes'
import TablePlans from './components/TablePlans'

export default function Pricing() {
  return (
    <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
      <Heading as="h1" size={'9'} weight={'medium'}>
        Pricing
      </Heading>
      <TablePlans />
    </Grid>
  )
}
