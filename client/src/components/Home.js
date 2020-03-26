import React, {useEffect} from 'react';
import { Header, } from "semantic-ui-react";
import axios from 'axios'


const Home = () => {
  useEffect(()=>{
    axios.get('/api/categorys').then((r)=>{
      console.log(r)
    })
    .catch(()=>{
      console.log("here")
    })
  })
  return(
  <Header as="h1">Home</Header>
)}

export default Home;