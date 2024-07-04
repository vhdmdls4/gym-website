import { Flex, TabNav, Tabs } from '@radix-ui/themes'

export default function TabsMenu() {
  return (
    <Flex direction="column" gap="4" pb="2">
      <Tabs.Root defaultValue="account">
        <Tabs.List color="indigo">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </Flex>
  )
}
