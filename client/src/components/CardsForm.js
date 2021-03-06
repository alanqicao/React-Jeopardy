import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";
import {useFormInput,} from "../hooks/useFormInput";

const CategorysForm =(props) =>{

  // const [name, setName] = useState("");
  const name = useFormInput("")

  const handleSubmit =(e) =>{
      e.preventDefault();
      axios.post("/api/categorys",{name:name.value,})
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
            {...name}
          />
            </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form> 
    </>
  )



}
export default CategorysForm