import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text
} from '@radix-ui/themes'
import {
  SiAdidas,
  SiNewbalance,
  SiNike,
  SiPuma,
  SiThunderstore,
  SiUnderarmour
} from 'react-icons/si'
import { IoMdFitness } from 'react-icons/io'
import BannerImage from 'assets/scott-webb-bannerimage.jpg'
import styles from './Home.module.css'
import { MdPeople, MdTimer } from 'react-icons/md'
import { PlusIcon } from '@radix-ui/react-icons'
import { FaExternalLinkAlt } from 'react-icons/fa'

type Props = {}

//https://webcode.tools/css-generator/keyframe-animation use this after

export default function Home({}: Props) {
  return (
    <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto">
      <Flex direction={'column'}>
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
          <p className="leading-relaxed text-lg">
            Start your fitness journey with us today and achieve your goals.
          </p>
          <p className="leading-relaxed text-lg">Be Strong. Be aesthetic.</p>
        </div>
        <Flex gap={'3'} mt={'5'} justify={{ initial: 'center', sm: 'start' }}>
          <Button size={'4'} variant="solid" highContrast color="gray">
            Start Now!
          </Button>
          <Button size={'4'} variant="outline" highContrast color="gray">
            Download App
          </Button>
        </Flex>
      </Flex>
      <Flex className="relative">
        <div className="flex justify-center self-center w-full">
          <img
            src={BannerImage}
            alt="Woman doing exercises with a bar"
            title="Fitness Banner"
            className={styles.homeBannerImage}
            width={400}
          />
        </div>
        <Box position={'absolute'} maxWidth="280px">
          <Card>
            <Flex gap="3" align="center" direction={'column'}>
              <Flex gap={'3'} align={'center'}>
                <MdPeople size={30} />
                <Box>
                  <Text as="div" size="2" weight="regular">
                    Experience trainer
                  </Text>
                </Box>
                <IconButton size="1" variant="soft" highContrast color="gray">
                  <PlusIcon width="15" height="15" />
                </IconButton>
              </Flex>
              <Flex className="-space-x-3 rtl:space-x-revers">
                <Avatar
                  size="3"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                  className="border-2 border-white dark:border-gray-800"
                />
                <Avatar
                  size="3"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  radius="full"
                  fallback="T"
                  className="border-2 border-white dark:border-gray-800"
                />
                <Avatar
                  size="3"
                  src="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  radius="full"
                  fallback="T"
                  className="border-2 border-white dark:border-gray-800"
                />
                <Avatar
                  size="3"
                  src="https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  radius="full"
                  fallback="T"
                  className="border-2 border-white dark:border-gray-800"
                />
                <Badge size="1" color="iris" variant="solid">
                  100+
                </Badge>
              </Flex>
            </Flex>
          </Card>
        </Box>
        <Box position={'absolute'} bottom={'5'} left="9" maxWidth="280px">
          <Card className="space-y-3">
            <Flex gap="3" align="center">
              <MdTimer size={30} />
              <Box>
                <Text as="div" size="2" weight="regular">
                  Repetition training
                </Text>
              </Box>
            </Flex>
            <Text as="div" size="2" weight="regular" align={'left'}>
              20 minutes
            </Text>
          </Card>
        </Box>
        <Box
          position="absolute"
          right="2"
          maxWidth="290px"
          className="inset-y-2/4"
        >
          <Card className="flex">
            <Flex gapX={'3'}>
              <Text
                as="div"
                size="2"
                weight="regular"
                className="flex"
                align={'right'}
              >
                <div className="flex justify-start">
                  <a href="#">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
                Start building your core muscles with this quick start guide.
              </Text>
            </Flex>
          </Card>
        </Box>
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
        <span className="flex self-center sm:self-auto">Collabs with</span>
        <Flex className="gap-3">
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
