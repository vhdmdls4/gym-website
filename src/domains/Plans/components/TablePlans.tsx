import { Avatar, Table } from '@radix-ui/themes'
import PremiumPlanImg from 'assets/OIG1.jpg'
import PlusPlanImg from 'assets/logo-plan-plus.jpg'
import { FaStopCircle } from 'react-icons/fa'
import { MdOutlineCheck, MdOutlineClose } from 'react-icons/md'

export default function TablePlans() {
  return (
    <Table.Root size={'3'}>
      <Table.Header>
        <Table.Row align={'end'}>
          <Table.ColumnHeaderCell width={'100%'}></Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={'center'}>
            {' '}
            <Avatar
              fallback="Plus plan"
              src={PlusPlanImg}
              size={'6'}
              radius="medium"
            />
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={'center'}>
            <Avatar
              fallback="Premium plan"
              src={PremiumPlanImg}
              size={'6'}
              radius="medium"
            />
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Free Fitness Assessment</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Group Fitness Classes</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Locker Rooms & Showers</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Personal Training Discounts</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Guest Passes</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Complimentary Merchandise</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>24/7 Gym Access</Table.RowHeaderCell>
          <Table.Cell justify={'end'} align="center">
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Access to All Equipment</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>
            Advanced Booking for Classes
          </Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Nutritional Guidance</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Towel Service</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Priority Support</Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>
            Exclusive Classes & Workshops
          </Table.RowHeaderCell>
          <Table.Cell justify={'center'}>
            <MdOutlineClose size={25} className="mx-auto" />
          </Table.Cell>
          <Table.Cell justify={'center'}>
            <MdOutlineCheck size={25} className="mx-auto" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  )
}
