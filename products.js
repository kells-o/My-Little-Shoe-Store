import React from 'react'


 export default class Product extends React.Component {

  constructor(props){  //brings products into array. change with this.state
    super(props)
    this.state = {
      products: [],
      error : false
    }
  }

  //will load automatically w componentDidMount
  //fetch - promise, retrieving data
  //.then changes to json file
  componentDidMount(){
    fetch('http://localhost:3005/api/products')
    .then((res) => res.json())
    .then( //pass data 
      (data) => {
        this.setState({
          products:data
        })     //change state
  },
  (error) => {
    error:true
    }
  )
}
    
     render(){
       const {products} = this.state; //moving state down
     return(
         <>

      <div class="w3-container">
        {products.map((products) => (
          <div class="w3-card-4">
          <img src={products.URL} alt="Alps" /> 
          <div class="w3-container w3-center">
            <p>{products.products_name}</p>
            </div>
            <p className = "w3-center">{$products.price}</p>
            </div>

           
        ))}
        

      </div>
      </>
     )
     }

}