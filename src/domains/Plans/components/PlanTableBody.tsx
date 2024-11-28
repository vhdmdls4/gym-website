import { Table } from '@radix-ui/themes'
import TableRowCellIcons from './PlanTableRowCellIcons'

export default function PlanTableBody() {
  return (
    <Table.Body>
      <TableRowCellIcons
        text="Free Fitness Assessment"
        showCheckInPlus={true}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Group Fitness Classes"
        showCheckInPlus={true}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Locker Rooms & Showers"
        showCheckInPlus={true}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Personal Training Discounts"
        showCheckInPlus={true}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Guest Passes"
        showCheckInPlus={true}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Complimentary Merchandise"
        showCheckInPlus={true}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="24/7 Gym Access"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Access to All Equipment"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Advanced Booking for Classes"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Nutritional Guidance"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Towel Service"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Priority Support"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
      <TableRowCellIcons
        text="Exclusive Classes & Workshops"
        showCheckInPlus={false}
        showCheckInPremium={true}
      />
    </Table.Body>
  )
}
