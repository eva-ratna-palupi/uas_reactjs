import React, {useState} from 'react'
import Produk from '../Class/Produk';

const Home = (props) => {
    return <div>
            <Produk stok="15"/>
            <Produk stok="18"/>
            <Produk stok="20"/>

    </div>
}

export default Home;