import React, { useEffect } from 'react';
import { Header, Button, } from "semantic-ui-react";
import axios from 'axios'
import { Link } from 'react-router-dom';


const Home = () => {
  // useEffect(() => {
  //   axios.get('/api/categorys').then((r) => {
  //     console.log(r)
  //   })
  //     .catch(() => {
  //       console.log("here")
  //     })
  // })
  return (
    <>
      <Header as="h1">Home</Header>
      <Link to='/playjeopardy'>
        <Button>Play Jeopardy</Button>
      </Link>
    </>
  )
}

export default Home;