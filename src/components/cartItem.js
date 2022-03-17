import React from 'react';


class CartItem extends React.Component {
    constructor() {
        super();

        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
   
        
    increaseQuantity=()=> {
        console.log(this.state);
       this.state.qty+=1
    }
 
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src='' alt='' />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 28 }}>Mobile {title}</div>
                    <div style={styles.font}>Rs {price}</div>
                    <div style={styles.font}>QTY: {qty}</div>
                    <div className='cart-items-actions'>
                        {/* {Buttons} */}
                        {/* passing reference creates a new instance of it which does not have any acess to its class attributes that's why we use this.increaseQuantity.bind(this) or use arrow functions */}
                        <img className='action-icons' src={require('../assets/3114793.png')} alt='plus' onClick={this.increaseQuantity}/>
                        <img className='action-icons' src={require('../assets/minus.png')} alt='minus' />
                        <img className='action-icons' src={require('../assets/bin.png')} alt='delete' />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 5,
        backgroundColor: '#ccc'
    },
    font: {
        fontSize: 20,
        color: '#777'
    }
}

export default CartItem;