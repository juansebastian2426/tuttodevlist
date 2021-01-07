import rectangle from '../assets/rectangle.png';
import elipse from '../assets/elipse.png';
import poligono from '../assets/poligono.png';
import circle from '../assets/circle.png';
import notFound from '../assets/shape-not-found.png'

export const getShape = (name: string) => {
    switch(name.toLowerCase()) {
        case "rectangle": {
            return rectangle;
        }
        case "elipse": {
            return elipse;
        }
        case "poligono": {
            return poligono;
        }
        case "circle": {
            return circle;
        }
        default:
            return notFound;
    }
}