import React, { useEffect, useState, } from 'react';
import CategorysForm from "./CategorysForm"
import { Header,  Button, List } from "semantic-ui-react";
import axios from 'axios'
import { Link, } from "react-router-dom";
import Category from "./Category"



const EditCategory = () => {

  const [categorys, setCategorys] = useState([]);
  // const [cards, setCard] = useState ([]);
  // const [questions,setQuestion] = useState ([])
  const [showForm,setShowForm] = useState(false)

  useEffect(() => {
    axios
      .get("/api/categorys")
      .then(res => {
        setCategorys(res.data);
      }
      )
    
  }, [])

   

  const renderCategory = () => {
    return categorys.map(categorys => (
      <div key={`cat-${categorys.id}`} style={{ margin: "0em 1em" }}>
        <Category id = {categorys.id} {...categorys} editCategory={editCategory} deleteCategory={deleteCategory}/>
      </div>
    )

    )
  }

  // this is kinda of correct, need wor.k
  const addCategory = (category) => setCategorys ([...categorys, category])

  const editCategory = (newCategorys) => setCategorys ([newCategorys])
  // put this in your form

  // const editCategory =(id,category) => {
  //   axios
  //     .put(`/api/categorys/${id}`, category)
  //     .then(res => {
  //        const newCard = categorys.map(category => {
  //         if (category.id === id) return res.data;
  //         return category;
  //       });
  //       setName({ newCard });
  //     });
  // }

  const deleteCategory = (id) => {
    axios
    .delete(`/api/categorys/${id}`)
    .then(res => {
        const newArray = categorys.filter(categorys => categorys.id !== id)
        setCategorys(newArray)
    }).catch(e=>{
      console.log('e')
      console.log(e)
    })
  }


  return (
    <>
      <Header as="h1">Edit Category</Header>
      <br />
      { showForm && <CategorysForm toggleForm ={setShowForm} add={addCategory} />}
      <Button onClick ={()=> setShowForm (!showForm)}>
        { showForm ? "Close Form" : "Add "}
      </Button>
      <List>
        {renderCategory()}

      </List>
    </>
  )
}

export default EditCategory;