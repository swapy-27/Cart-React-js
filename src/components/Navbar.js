import React from "react";

const Navbar = (props) => {

    return (
        <div style={styles.nav}>

            <div style={styles.cartIconContiner}>
                <img style={styles.cartIcon} src={require('../assets/shopping-cart.png')} alt="" />
                <span style={styles.cartCount}>{props.getCount()}</span>
            </div>

        </div>
    )

}

const styles = {
    nav: {
        height: 70,
        width: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

        // width:100%,
    },
    cartIconContiner: {
        position: 'relative',
    },
    cartIcon: {
        height: 40,
        width: 50,
        marginRight: 30
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }

}
export default Navbar;