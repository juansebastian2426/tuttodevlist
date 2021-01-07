import { useContext } from 'react';
import { ShapeItem } from "../../models/ShapeItem"
import { Image } from 'react-bootstrap';
import './styles.css'
import {
    FaEdit
} from 'react-icons/fa';
import { IoRemoveCircleSharp } from "react-icons/io5";
import { getShape } from '../../utils/getShape';
import { Context, ContextType } from '../../contexts/ShapeListContext';

interface Props {
    shape: ShapeItem
}

export const Item = ({ shape }:Props) => {

    const { deleteShapeItem, handleOpenModal } = useContext(Context) as ContextType;
    

    return (
        <div className='item'>
            <span className='item__id'>{shape.id}</span>
            <img src={getShape(shape.name)} alt='shape' width={50} />
            <p className='item__title'>{ shape.name }</p>
            <div className='item__options'>
                <FaEdit size={20} style={{ marginRight: '5px' }} onClick={() => handleOpenModal(shape)} />
                <IoRemoveCircleSharp size={20} color='red' onClick={() => deleteShapeItem(shape)} />
            </div>
        </div>
    )
}