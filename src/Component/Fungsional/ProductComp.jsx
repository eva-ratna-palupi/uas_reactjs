import React, {useContext} from 'react'
import {
    Row, Container
} from 'reactstrap';
import { CartContext } from '../../CartContext';
import RowProduct from './RowProduct';

function ProductComp() {
    const { value, setValue } = useContext(CartContext)
    return (
        <div>
            <Container>
                <hr />
                <h2>Produk {value}</h2>
                <Row>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                </Row>

            </Container>
        </div>
    )
}

export default ProductComp