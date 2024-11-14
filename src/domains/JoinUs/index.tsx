import { Button, Flex, Grid, Heading } from '@radix-ui/themes'
import stylesHome from '../Home/Home.module.css'

export function JoinUs() {
  return (
    <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto">
      <div className={stylesHome.backgroundStripes} />
      <Flex direction={'column'}>
        <div className="space-y-1"></div>
      </Flex>
    </Grid>
  )
}
