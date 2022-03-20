import React from 'react';
import CartItem from './cartItem';

class Cart extends React.Component {

    constructor() {
        super();

        this.products = [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 7,
                img: '',
                id: 1
            },
            {
                price: 1999,
                title: 'Laptop',
                qty: 10,
                img: '',
                id: 2
            },
            {
                price: 199,
                title: 'headphones',
                qty: 19,
                img: '',
                id: 3
            },
            {
                price: 99,
                title: 'watch',
                qty: 1,
                img: '',
                id: 4
            }
        ]
    }

    render() {
        const products = this.products;
        return (
            <div className='cart'>
                {products.map(
                    (product)=>{
                        return (
                            <CartItem product={product} key={product.id}/>
                        )
                    }
                )}

            </div>
        )
    }


}

export default Cart;