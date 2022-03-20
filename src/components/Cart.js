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
                id: 0
            },
            {
                price: 1999,
                title: 'Laptop',
                qty: 10,
                img: '',
                id: 1
            },
            {
                price: 199,
                title: 'headphones',
                qty: 19,
                img: '',
                id: 2
            },
            {
                price: 99,
                title: 'watch',
                qty: 1,
                img: '',
                id: 3
            }
        ]


    }
    handleIncreaseQuantity = (product) => {

        const products = this.products;

        let index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products: products
        })

    }
    handleDecreaseQuantity = (product) => {
        const products = this.products;

        let index = products.indexOf(product);
        if (products[index].qty > 0) {
            products[index].qty -= 1;
        }
        else {
            return;
        }

        this.setState({
            products: products
        })
    }

    handleDeleteProduct=(product)=>{
        
        const products = this.products;
      

        const items = products.filter((item)=>{return item.id!==product.id})
       
        this.setState({
            products:this.products=items
        })
    }

    render() {
        const products = this.products;
        return (
            <div className='cart'>


                {products.map(
                    (product) => {
                        return (
                            <CartItem product={product} key={product.id} increaseQuantity={this.handleIncreaseQuantity} decreaseQuantity={this.handleDecreaseQuantity} deleteProduct ={this.handleDeleteProduct} />
                        )
                    }
                )}


            </div>
        )
    }


}

export default Cart;