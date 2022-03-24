
import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar  from './components/Navbar';
import db from './firebase';
class App extends React.Component{
  constructor() {
    super();

    this.state ={
      products:  [],
      loading:true

  }
}
handleIncreaseQuantity = (product) => {

    const products = this.state.products;

    let index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })

}
handleDecreaseQuantity = (product) => {
    const products = this.state.products;

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
    
    const products = this.state.products;
    const items = products.filter((item)=>{return item.id!==product.id})
   
    this.setState({
        products:this.products=items
    })
}
handleGetCount=()=>{
  let count=0;
  this.state.products.forEach((product)=>{
    count+=product.qty
  })  
  return count;
}
handleGetTotal=()=>{
  let total =0;

  this.state.products.forEach(
    (product)=>{
      total+=((product.qty*product.price))
    }
  )
  return total;
}

componentDidMount=()=>{

  //adding listener so that anything changes in firebase it updated automatically
  db
  .collection('product')
  .onSnapshot(
    (snapshot)=>{
     
      
      const products = snapshot.docs.map(
        (doc)=>{
          let d = doc.data();
          d['id']=doc.id
          return d;
        }
      )
      console.log(products)
      
      this.setState(
        {
          products:products,
          loading:false
        }
      )
  })
       
}
  render(){
    const {products,loading} = this.state;
    return (

      <div className="App">
        <Navbar getCount = {this.handleGetCount} />
        <Cart products ={products} increaseQuantity={this.handleIncreaseQuantity} decreaseQuantity={this.handleDecreaseQuantity} deleteProduct ={this.handleDeleteProduct} />
        {loading && <h1>Loading...</h1>}
        <div style={{fontSize:20, padding:10}}>Total-Amount={this.handleGetTotal()}</div>
      </div>

     
    );
  }
}



export default App;
