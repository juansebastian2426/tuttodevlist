import { ShapeItem } from '../../models/ShapeItem';
import { Item } from '../Item/Item';

interface Props {
  items: ShapeItem[]
}

export const TodoList = ({ items }: Props) => {
  return <>
    <div style={{ height: '300px', overflowY: 'scroll' }}>
      {items.map(item => (
        <Item key={item.id} shape={item} />
      ))}
    </div>
  </>
}