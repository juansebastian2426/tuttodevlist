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
      { items.length <= 0 && <p style={{ textAlign: 'center', color: '#ccc' }}>You don't have items yet</p> }
    </div>
  </>
}