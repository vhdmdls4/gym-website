import { Table } from '@radix-ui/themes'
import { MdOutlineCheck, MdOutlineClose } from 'react-icons/md'

interface TableRowCellIconsProps {
  text: string
  showCheckInPlus: boolean
  showCheckInPremium: boolean
}

export default function TableRowCellIcons({
  text,
  showCheckInPlus,
  showCheckInPremium
}: TableRowCellIconsProps) {
  return (
    <Table.Row>
      <Table.RowHeaderCell>{text}</Table.RowHeaderCell>
      <Table.Cell justify={'center'}>
        {showCheckInPlus ? (
          <MdOutlineCheck size={25} className="mx-auto" />
        ) : (
          <MdOutlineClose size={25} className="mx-auto" />
        )}
      </Table.Cell>
      <Table.Cell justify={'center'}>
        {showCheckInPremium ? (
          <MdOutlineCheck size={25} className="mx-auto" />
        ) : (
          <MdOutlineClose size={25} className="mx-auto" />
        )}
      </Table.Cell>
    </Table.Row>
  )
}
