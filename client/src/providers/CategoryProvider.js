import React from 'react'
import axios from 'axios'

const CategoryContext = React.createContext();

export const CategoryConsumer = CategoryContext.Consumer;

class CategoryProvider extends React.Component {
  state = {
    categories: []
  };

  // getAllCategories =() => {
  //   const {categories} = this.state
  //   if(categories.length === 0){
  //     axios.get('/api/categorys').then(res=>{
  //       this.setState({categories: res.data})
  //     })
  //   }
  // }

  componentDidMount() {
    axios.get('/api/categorys').then(res => {
      this.setState({ categories: res.data })
      console.log(this.state.categories)
    })
  }

  render() {
    return (
      <CategoryContext.Provider value={this.state}>
        {this.props.children}
      </CategoryContext.Provider>
    )
  }
}

export default CategoryProvider;