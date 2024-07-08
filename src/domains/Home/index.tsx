import { Box, Card, Flex, Grid, Heading, Section } from '@radix-ui/themes'
import {
  SiAdidas,
  SiNewbalance,
  SiNike,
  SiPuma,
  SiThunderstore,
  SiUnderarmour
} from 'react-icons/si'
import Growth from 'assets/growth-logo.png'
import { IoMdFitness } from 'react-icons/io'
import BannerImage from 'assets/banner-image-op1.jpg'
import BannerImage2 from 'assets/scott-webb-bannerimage.jpg'
import styles from './Home.module.css'

type Props = {}

//https://webcode.tools/css-generator/keyframe-animation use this after

export default function Home({}: Props) {
  return (
    <Grid columns={{ sm: '1', md: '2' }} gap="5" width="auto">
      <div className={styles.backgroundStripes} />
      <Flex direction={'column'} py="5" className="flex">
        <div className="space-y-1">
          <Heading as="h1" size={'9'} weight={'medium'}>
            Get Fit,{' '}
          </Heading>
          <Heading as="h1" size={'9'} weight={'medium'}>
            Get Strong,{' '}
          </Heading>
          <Heading as="h1" size={'9'} weight={'medium'}>
            Get Healthy
          </Heading>
        </div>
        <div className="my-3">
          <p>
            Start your fitness journey with us today and achieve your goals.
          </p>
          <p>Be Strong. Be aesthetic.</p>
        </div>
      </Flex>
      <Flex>
        <img
          src={BannerImage}
          alt="Woman doing exercises with a bar"
          title="Fitness Banner"
          className={styles.homeBannerImage}
        />
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
      <Flex className="flex flex-col align-end col-span-full my-5">
        Collabs with
        <Flex gap={'8'}>
          <SiAdidas size={60} />
          <SiNike size={60} />
          <SiNewbalance size={60} />
          <IoMdFitness size={60} />
          <SiPuma size={60} />
          <SiUnderarmour size={60} />
          <SiThunderstore size={60} />
        </Flex>
      </Flex>
    </Grid>
  )
}
