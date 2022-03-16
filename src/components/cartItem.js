import React from 'react';


class CartItem extends React.Component {
    render() {

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src='' alt='' />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:32}}>Phone</div>
                    <div style={styles.font}>Rs 999</div>
                    <div style={styles.font}>QTY :1</div>
                    <div className='cart-items-actions'>
                        {/* {Buttons} */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:5
    },
    font:{
        fontSize:24,
        color:'#777'
    }
}

export default CartItem;