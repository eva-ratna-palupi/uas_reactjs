import React from 'react'
import Produk from '../Class/Produk';
//import Blog from './Blog'

const Home = () => {
    return <div>
        <Produk
            stok="10"
            nama="Macbook Pro 2018"
            harga="25.500.000"
        />

        <Produk
            stok="15"
            nama="Macbook Pro 2019"
            harga="28.500.000"
        />

        <Produk
            stok="20"
            nama="Macbook Pro 2020"
            harga="30.500.000"
        />

        <Produk
            stok="30"
            nama="Macbook Pro 2021"
            harga="32.500.000"
        />
    </div>
}

export default Home;