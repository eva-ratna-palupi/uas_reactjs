import React from 'react'
import './CSS/Produk.css'

class Produk extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stok,
            sub: "Beli",
            status: "Tersedia",
            disabled: false

        }
    }
    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render(){
        return(
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://cdn.vox-cdn.com/thumbor/T6t8XBXGKWiSC6sXqA8BxdqYIj0=/0x0:2040x1360/1570x883/filters:focal(860x723:1186x1049):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66790314/dbohn_200506_4012_0031.0.jpg" alt=""/>
                <p><b>Rp. {this.props.harga}</b></p>
                <p>Stok : {this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>

            </div>
        )
    }
}

export default Produk;