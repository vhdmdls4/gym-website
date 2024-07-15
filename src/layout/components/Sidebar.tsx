import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Button,
  Dialog,
  Flex,
  IconButton,
  Text,
  TextField
} from '@radix-ui/themes'
import { useState } from 'react'
import styles from './Sidebar.module.css'
import { Drawer } from 'vaul'

interface SidebarProps {
  isOpen?: boolean
  handleOpen?: () => void
}

export default function Sidebar({ isOpen, handleOpen }: SidebarProps) {
  return (
    // <Dialog.Root>
    //   <Dialog.Trigger>
    //     <Button variant="ghost" title="Navigation" className="p-5">
    //       <HamburgerMenuIcon width={30} height={30} color="white" />
    //     </Button>
    //   </Dialog.Trigger>

    //   <Dialog.Content className={styles.dialogContent} maxWidth="450px">
    //     <Dialog.Title>Edit profile</Dialog.Title>
    //     <Dialog.Close>
    //       <button className="absolute top-[10px] right-[10px] p-1 rounded-full hover:bg-[#ddeaf814] focus:outline-none ">
    //         <Cross2Icon width={22} height={22} color="gray" />
    //       </button>
    //     </Dialog.Close>
    //     <Dialog.Description size="2" mb="4">
    //       Make changes to your profile.
    //     </Dialog.Description>

    //     <Flex direction="column" gap="3">
    //       <label>
    //         <Text as="div" size="2" mb="1" weight="bold">
    //           Name
    //         </Text>
    //         <TextField.Root
    //           defaultValue="Freja Johnsen"
    //           placeholder="Enter your full name"
    //         />
    //       </label>
    //       <label>
    //         <Text as="div" size="2" mb="1" weight="bold">
    //           Email
    //         </Text>
    //         <TextField.Root
    //           defaultValue="freja@example.com"
    //           placeholder="Enter your email"
    //         />
    //       </label>
    //     </Flex>
    //   </Dialog.Content>
    // </Dialog.Root>
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <Button variant="ghost" title="Navigation" className="p-5">
          <HamburgerMenuIcon width={30} height={30} color="white" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 right-0">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{' '}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{' '}
                under the hood and is inspired by{' '}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}