import { Avatar, Table } from '@radix-ui/themes'
import PremiumPlanImg from 'assets/OIG1.jpg'
import PlusPlanImg from 'assets/logo-plan-plus.jpg'

export default function PlanTableHeaders() {
  return (
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
  )
}
