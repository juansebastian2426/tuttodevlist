import { useContext } from 'react';
import { ShapeItem } from "../../models/ShapeItem";
import './styles.css'
import {
    FaEdit,
    FaStar,
    FaRegStar
} from 'react-icons/fa';
import { IoRemoveCircleSharp } from "react-icons/io5";
import { getShape } from '../../utils/getShape';
import { Context as ShapeListContext , ContextType as ShapeListContextType  } from '../../contexts/ShapeListContext';

interface Props {
    shape: ShapeItem
}

export const Item = ({ shape }:Props) => {

    const { deleteShapeItem, handleOpenModal, addWithFavorite, removeWithFavorite } = useContext(ShapeListContext) as ShapeListContextType;

    const handleFav = () => shape.isFavorite ? removeWithFavorite(shape) : addWithFavorite(shape);
    
    return (
        <div className='item' data-testid='item'>
            <span className='item__id'>{shape.id}</span>
            <img src={getShape(shape.name)} alt='shape' width={50} />
            <p className='item__title'>{ shape.name }</p>
            <div className='item__options'>
                { shape.isFavorite ? (
                        <FaStar 
                            size={20} 
                            style={{ marginRight: '10px', color: '#d83936' }}
                            onClick={() => handleFav()}
                        />
                    ) : (
                        <FaRegStar 
                            size={20} 
                            style={{ marginRight: '10px' }} 
                            onClick={() => handleFav()}
                        />
                    )
                }
                <FaEdit size={20} style={{ marginRight: '5px' }} onClick={() => handleOpenModal(shape)} />
                <IoRemoveCircleSharp data-testid='remove-item' size={20} color='red' onClick={() => deleteShapeItem(shape)} />
            </div>
        </div>
    )
}