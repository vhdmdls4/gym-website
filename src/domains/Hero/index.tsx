import { Grid } from '@radix-ui/themes'
import BannerSection from './components/BannerSection'
import HeroSection from './components/HeroSection'
import PartnersSection from './components/PartnersSection'

export default function Hero() {
  return (
    <div className="min-h-dvh">
      <Grid
        columns={{
          initial: '1',
          lg: '2'
        }}
        gap="5"
        width="auto"
        gridColumn={{ initial: '1', lg: '2' }}
        gridRow={{ initial: '3', lg: '2' }}
        height={{ initial: 'auto', lg: 'h-full' }}
      >
        <HeroSection />
        <PartnersSection />
        <BannerSection />
      </Grid>
    </div>
  )
}
