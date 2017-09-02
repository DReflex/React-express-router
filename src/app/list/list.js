import React from 'react';

class List extends React.Component {
  constructor(){
    super();
    this.state ={
      products: []
    }
  }
  componentDidMount(){
    fetch('/api/prod').then(function(data){
      return data.json();
    }).then( res => {

      this.setState({products: res})
    })
  }
  render(){
      console.log(this.state.products)
    return(
      <div>
      <h1>This is List Component</h1>
      <ul>
      {this.state.products.map(post =>
  <li key={post._id}>{post.name}</li>
)}
      </ul>
      </div>
    )
  }
}
export default List
