import { Button, Flex, Heading } from '@radix-ui/themes'

export default function HeroSection() {
  return (
    <Flex
      direction={'column'}
      gridRowStart={'1'}
      gridRowEnd={{ initial: '1', lg: '2' }}
    >
      <Flex
        gapX={{ initial: '4', lg: '2' }}
        gapY={{ initial: '1', lg: '1' }}
        wrap={'wrap'}
        direction={{ initial: 'row', xs: 'column', sm: 'row', lg: 'column' }}
      >
        <Heading as="h1" size={'9'} weight={'medium'}>
          Get Fit,{' '}
        </Heading>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Get Strong,{' '}
        </Heading>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Get Healthy
        </Heading>
      </Flex>
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
  )
}
