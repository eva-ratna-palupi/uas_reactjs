import React from 'react'
import Produk from '../Class/Produk';
import anggur from '../Gambar/anggur.jpg'
import apel from '../Gambar/apple.jpg'
import avocado from '../Gambar/avocado.jpg'
import banana from '../Gambar/banana.jpg'
import {Container} from 'reactstrap'


const Home = () => {
    return <div>
        <Container className="themed-container" fluid={true}>
        <br/>
        <Produk
            stok="10"
            nama="Anggur California"
            harga="35.500"
            img={anggur}
        />
        
        <Produk
            stok="15"
            nama="Apel Hijau Malang"
            harga="25.000"
            img={apel}
        />

        <Produk
            stok="20"
            nama="Alpukat"
            harga="30.500"
            img={avocado}
        />

        <Produk
            stok="30"
            nama="Pisang Ambon"
            harga="20.000"
            img={banana}
        />
        </Container>
    </div>
}

export default Home;