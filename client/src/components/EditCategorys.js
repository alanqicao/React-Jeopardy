import React, {useEffect,useState,} from 'react';
import { Header, RowCenter, Title, Button,Segment, List} from "semantic-ui-react";
import axios from 'axios'


const EditCategory = props => {

    const [categorys,setName] = useState ([]);

  useEffect(()=>{
    axios
    .get("/api/categorys")
    .then(res => {
      setName(res.data);
    }
    )
   
  },[])


const renderCategory = () =>{
  return categorys.map( category => (
    <Segment key ={category.id}>

      <List.Header as ="h3">{category.name}</List.Header>

    </Segment>
  )

  )
}




  return(
  <>
  <Header as="h1">Edit Cards</Header>
  <br/>
  <List>
    {renderCategory()}
  </List>
  </>
)}

export default EditCategory;