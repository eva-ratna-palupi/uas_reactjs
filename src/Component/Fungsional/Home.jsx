import React from 'react'
import Produk from '../Class/Produk';


import { Container } from 'reactstrap'


const Home = () => {
    return <div>
        <Container className="themed-container" fluid={true}>
            <br />
            <Produk
                
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

            <Produk
                stok="30"
                nama="Berry Ungu"
                harga="20.000"
                img={bery}
            />

            <Produk
                stok="30"
                nama="Buah Naga"
                harga="20.000"
                img={dragon}
            />

            <Produk
                stok="30"
                nama="Jeruk Mandarin"
                harga="20.000"
                img={jeruk}
            />

            <Produk
                stok="30"
                nama="Kiwi "
                harga="20.000"
                img={kiwi}
            />

            <Produk
                stok="30"
                nama="Lemon"
                harga="20.000"
                img={lemon}
            />

            <Produk
                stok="30"
                nama="Mangga"
                harga="20.000"
                img={mangga}
            />

            <Produk
                stok="30"
                nama="Pepaya "
                harga="20.000"
                img={pepaya}
            />

            <Produk
                stok="30"
                nama="Nanas"
                harga="20.000"
                img={nanas}
            />

            <Produk
                stok="30"
                nama="Strawberry"
                harga="20.000"
                img={strawbery}
            />

            <Produk
                stok="30"
                nama="Semangka"
                harga="20.000"
                img={semangka}
            />
        </Container>
    </div>
}

export default Home;