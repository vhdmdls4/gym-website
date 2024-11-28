import { Table } from '@radix-ui/themes'
import PlanTableHeaders from './PlanTableHeaders'
import PlanTableBody from './PlanTableBody'

export default function PlanTable() {
  return (
    <Table.Root size={'3'}>
      <PlanTableHeaders />
      <PlanTableBody />
    </Table.Root>
  )
}
