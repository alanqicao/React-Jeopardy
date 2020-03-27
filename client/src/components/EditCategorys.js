import React, { useEffect, useState, } from 'react';
import CategorysForm from "./CategorysForm"
import { Header, RowCenter, Title, Button, Segment, List } from "semantic-ui-react";
import axios from 'axios'



const EditCategory = props => {

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
    return categorys.map(category => (
      <Segment key={category.id}>

        <List.Header as="h3">{category.name}</List.Header>

      </Segment>
    )

    )
  }

   useEffect(() => {
    axios
    .post(`/api/categorys/`)
  })




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