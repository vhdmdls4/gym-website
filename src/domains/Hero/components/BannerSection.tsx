import { Flex } from '@radix-ui/themes'
import GuideCard from './GuideCard'
import BannerImageComponent from './BannerImageComponent'
import TrainerCard from './TrainerCard'
import TrainingCard from './TrainingCard'

export default function BannerSection() {
  return (
    <Flex
      className="relative"
      gridColumn={{ initial: '1', lg: '2' }}
      gridRowStart={{ initial: '2', lg: '1' }}
      gridRowEnd={{ initial: '2', lg: '3' }}
    >
      <BannerImageComponent />
      <TrainerCard />
      <TrainingCard />
      <GuideCard />
      {/* <img
          src={BannerImage2}
          alt="Woman with muscles defined"
          title="Fitness Banner"
          /> */}
      {/* <Flex gapX={'3'}>
          <Card className="flex flex-col items-center justify-center p-3">
            <img src={Growth} alt="Growth" className="w-32 h-32" />
            <p>Grow your muscles</p>
          </Card>
        </Flex> */}
    </Flex>
  )
}
