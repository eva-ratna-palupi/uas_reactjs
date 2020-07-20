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
    //<Blog
    //tanggal="02 Juni 20120"
    //judul="Teknologi Blockchain"
    //summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    //>

    //<Blog
    //tanggal="03 Juni 20120"
    //judul="Teknologi Internet of Things"
    //summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    // />

    //<Blog
    //tanggal="04 Juni 20120"
    //judul="Desain Patern Laravel"
    //summary="Generate Lorem Ipsum placeholder text for use in your graphic."
    //>

}

export default Home;