import { SegmentedControl } from '@radix-ui/themes'
import { Link, useLocation } from 'react-router-dom'

type TabStyle = 'menu' | 'custom'

const tabsType: Record<TabStyle, string> = {
  menu: '',
  custom: ''
}

const toggleGroupItemClasses =
  'dark:data-[state=on]:bg-gray-100 dark:data-[state=on]:text-black'

interface Props {
  classNames?: string
}

export default function TabsMenu({ classNames }: Props) {
  const location = useLocation()
  function handlePageChange() {}
  return (
    <SegmentedControl.Root defaultValue="home" size="3" className={classNames}>
      <SegmentedControl.Item className={toggleGroupItemClasses} value="home">
        Home
      </SegmentedControl.Item>
      <SegmentedControl.Item className={toggleGroupItemClasses} value="service">
        Service
      </SegmentedControl.Item>
      <SegmentedControl.Item className={toggleGroupItemClasses} value="pricing">
        <Link className="w-full h-full" to={'/pricing'}>
          Pricing
        </Link>
      </SegmentedControl.Item>
      <SegmentedControl.Item className={toggleGroupItemClasses} value="whyUs">
        Why Us
      </SegmentedControl.Item>
      <SegmentedControl.Item className={toggleGroupItemClasses} value="ourWork">
        Our work
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  )
}
