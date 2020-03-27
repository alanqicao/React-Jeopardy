import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

const CategorysForm =(props) =>{

  const [name, setName] = useState("");

  // const handleNameChange =(e) =>{
  //   setName(e.target.value)
  // }

  const handleSubmit =(e) =>{
      e.preventDefault();
      axios.post("/api/categorys",{name})
      .then(res => {
        props.add(res.data)
        props.toggleForm();
      })
  };


  return (
    <>
       <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
            </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form> 
    </>
  )



}
export default CategorysForm