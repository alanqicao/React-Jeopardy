import React, { useEffect, useState, } from 'react';
import CategorysForm from "./CategorysForm"
import { Header, RowCenter, Title, Button, Segment, List } from "semantic-ui-react";
import axios from 'axios'
import { Link, } from "react-router-dom";
import Category from "./Category"



const EditCategory = () => {

  const [categorys, setName] = useState([]);
  const [cards, setCard] = useState ([]);
  const [questions,setQuestion] = useState ([])
  const [showForm,setShowForm] = useState(false)

  useEffect(() => {
    axios
      .get("/api/categorys")
      .then(res => {
        setName(res.data);
      }
      )
    
  }, [])

   const addCategory = (category) => setName ([...categorys, category,])

  const renderCategory = () => {
    return categorys.map(categorys => (
      <div style={{ margin: "0em 1em" }}>
        <Category {...categorys} editCategory={editCategory} deleteCategory={deleteCategory}/>
      </div>
    )

    )
  }

   useEffect(() => {
    axios
    .post(`/api/categorys/`)
  })

  const editCategory =(id,category) => {
    axios
      .put(`/api/categorys/${id}`, category)
      .then(res => {
         const newCard = categorys.map(category => {
          if (category.id === id) return res.data;
          return category;
        });
        setName({ newCard });
      });
  }

  const deleteCategory = (id) => {
    axios
    .delete(`/api/categorys/${id}`)
    .then(res => {
         setName.filter(categorys => categorys.id !== id)
    })
  }


  return (
    <>
      <Header as="h1">Edit Category</Header>
      <br />
      { showForm && <CategorysForm toggleForm ={setShowForm} add = {addCategory}/>}
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