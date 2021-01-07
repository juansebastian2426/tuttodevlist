import { useContext, useState, useEffect, useMemo } from 'react';
import {
  Modal,
  Button,
  Image,
  Form
} from 'react-bootstrap';
import { Context, ContextType } from '../../contexts/ShapeListContext';
import { getShape } from '../../utils/getShape';
import { getAllShapes } from '../../utils/getAllShapes';
import { ShapeItem } from '../../models/ShapeItem';

export const AddOrUpdateItem = () => {

  const { showModal, handleCloseModal, shapeItemSelectedForUpdate: item, addShapeItem, updateShapeItem } = useContext(Context) as ContextType;

  const [shapeImageUrl, setShapeImageUrl] = useState<string>(getShape('rectangle'));
  const [shapeSelected, setShapeSelected] = useState<ShapeItem>({ name: 'rectangle' });

  useEffect(() => {
    if (item) {
      setShapeSelected(item);
      setShapeImageUrl(getShape(item.name));
    } else {
      setShapeSelected({ name: 'rectangle' });
      setShapeImageUrl(getShape('rectangle'));
    }
  }, [item]);

  const title = item ? `Edit ${item.name} Shape` : 'Create New Shape';

  const handleChangeShape = (shapeName: string) => {
    if (item) {
      setShapeSelected({ ...item, name: shapeName });
    } else {
      setShapeSelected({ name: shapeName });
    }
    setShapeImageUrl(getShape(shapeName));
  }

  const shapeListSelected = useMemo(() => {
    return getAllShapes().map(shapeName => (<option value={shapeName}>{shapeName}</option>))
  }, []);

  const saveChanges = () => {
    if (item) {
      updateShapeItem(shapeSelected);
    } else {
      addShapeItem(shapeSelected);
    }
    handleCloseModal();
  }

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: 'center' }}>
          <div style={{ minHeight: '290px' }}>
            <Image src={shapeImageUrl} />
          </div>

          <Form.Control
            as="select" 
            style={{ marginTop: '40px' }} 
            onChange={event => handleChangeShape(event.target.value)}
            defaultValue={shapeSelected.name.toLocaleLowerCase()}>
            {shapeListSelected}
          </Form.Control>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => saveChanges()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}