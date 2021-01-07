import { useContext } from 'react';
import { Context, ContextType } from '../../contexts/ShapeListContext';
import {
    Form
} from 'react-bootstrap';


export const Search = () => {

    const { handleSearch, wordToSearch } = useContext(Context) as ContextType;

    return (
        <Form>
            <Form.Control 
                type="text"
                placeholder="Search by name ..."
                value={wordToSearch}
                onChange={event => handleSearch(event.target.value)}
            />
        </Form>
    )
}