import { SegmentedControl } from '@radix-ui/themes'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'

type TabStyle = 'menu' | 'custom'

const tabsType: Record<TabStyle, string> = {
  menu: '',
  custom: ''
}

const toggleGroupItemClasses =
  'dark:data-[state=on]:bg-gray-100 dark:data-[state=on]:text-black dark:data-[state=on]:duration-300 dark:data-[state=on]:ease-in-out dark:data-[state=on]:rounded-full hover:cursor-pointer transitions'

interface Props {
  classNames?: string
  hidden?: boolean
}

const BASE_PATH = import.meta.env.PROD ? '/gym-website' : '/gym-website'

export default function TabsMenu({ hidden }: Props) {
  const navigate = useNavigate()

  const handleValueChange = (value: string) => {
    switch (value) {
      case 'home':
        navigate(`${BASE_PATH}/`)
        break
      case 'plans':
        navigate(`${BASE_PATH}/plans`)
        break
      case 'whyUs':
        navigate(`${BASE_PATH}/why-us`)
        break
      case 'ourWork':
        navigate(`${BASE_PATH}/our-work`)
        break
      case 'joinUs':
        navigate(`${BASE_PATH}/join-us`)
        break
      default:
        break
    }
  }

  return (
    <div className="hidden lg:block">
      <SegmentedControl.Root
        defaultValue="home"
        size="3"
        onValueChange={(value) => {
          handleValueChange(value)
        }}
        className=""
      >
        <SegmentedControl.Item className={toggleGroupItemClasses} value="home">
          Home
        </SegmentedControl.Item>
        {/* <SegmentedControl.Item
          className={toggleGroupItemClasses}
          value="service"
        >
          Service
        </SegmentedControl.Item> */}
        <SegmentedControl.Item className={toggleGroupItemClasses} value="plans">
          Plans
        </SegmentedControl.Item>
        <SegmentedControl.Item className={toggleGroupItemClasses} value="whyUs">
          Why Us
        </SegmentedControl.Item>
        <SegmentedControl.Item
          className={toggleGroupItemClasses}
          value="ourWork"
        >
          Our work
        </SegmentedControl.Item>
        <SegmentedControl.Item
          className={toggleGroupItemClasses}
          value="joinUs"
        >
          Join Us
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    </div>
  )
}
