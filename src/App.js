
import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import db from './firebase';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: true

    }
  }
  handleIncreaseQuantity = (product) => {

    const products = this.state.products;

    let index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products: products
    // })

    const docRef = db.collection('product').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    }).then(
      () => {
        console.log('increased count  successfully')
      }
    ).catch(
      () => {
        console.log('error in updating')
      }
    )

  }
  handleDecreaseQuantity = (product) => {
    const products = this.state.products;

    let index = products.indexOf(product);

    // if (products[index].qty > 0) {
    //   products[index].qty -= 1;
    // }
    // else {
    //   return;
    // }

    //   this.setState({
    //     products: products
    //   })
    // }
    if (products[index].qty > 0) {
      const docRef = db.collection('product').doc(products[index].id);
      docRef.update({
        qty: products[index].qty - 1
      }).then(
        () => {
          console.log('increased count  successfully')
        }
      ).catch(
        () => {
          console.log('error in updating')
        }
      )
    }
    else {
      return;
    }

  }
  handleDeleteProduct = (product) => {

    const products = this.state.products;
    
    // this.setState({
    //   products: this.products = items
    // })

    const docRef = db.collection('product').doc(product.id);
    docRef.delete();
  }
  handleGetCount = () => {
    let count = 0;
    this.state.products.forEach((product) => {
      count += product.qty
    })
    return count;
  }
  handleGetTotal = () => {
    let total = 0;

    this.state.products.forEach(
      (product) => {
        total += ((product.qty * product.price))
      }
    )
    return total;
  }

  componentDidMount = () => {

    //adding listener so that anything changes in firebase it updated automatically
    db
      .collection('product')
      .onSnapshot(
        (snapshot) => {


          const products = snapshot.docs.map(
            (doc) => {
              let d = doc.data();
              d['id'] = doc.id
              return d;
            }
          )
          

          this.setState(
            {
              products: products,
              loading: false
            }
          )
        })

  }
  addProduct = () => {
    db
      .collection('product')
      .add({
        img: '',
        qty: 10,
        price: 1000,
        title: 'mustang'
      })
      .then((docRef) => {
        console.log('product has been added', docRef);

      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    const { products, loading } = this.state;
    return (

      <div className="App">

        <Navbar getCount={this.handleGetCount} />

        <button style={styles.button} onClick={this.addProduct}>Add product</button>

        <Cart products={products} increaseQuantity={this.handleIncreaseQuantity} decreaseQuantity={this.handleDecreaseQuantity} deleteProduct={this.handleDeleteProduct} />
        {loading && <h1>Loading...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>Total-Amount={this.handleGetTotal()}</div>
      </div>


    );
  }
}

const styles = {
  button: {
    margin: 10,
    color: 'green'
  }
}


export default App;
