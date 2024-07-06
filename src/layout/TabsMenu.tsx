import { Flex, TabNav, Tabs } from '@radix-ui/themes'

export default function TabsMenu() {
  return (
    <Flex justify={'center'} align={'center'} direction="column" gap="4" pb="2">
      <Tabs.Root defaultValue="account">
        <Tabs.List color="indigo">
          <Tabs.Trigger value="account">Home</Tabs.Trigger>
          <Tabs.Trigger value="service">Service</Tabs.Trigger>
          <Tabs.Trigger value="pricing">Pricing</Tabs.Trigger>
          <Tabs.Trigger value="whyUs">Why Us</Tabs.Trigger>
          <Tabs.Trigger value="ourWork">Our work</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Flex>
  )
}
