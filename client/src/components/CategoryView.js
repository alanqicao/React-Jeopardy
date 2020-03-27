import React,{useEffect,useState} from "react";
import axios from "axios";
import { Button, Header, Segment, List} from "semantic-ui-react";
import { Link, } from "react-router-dom";

const CategoryView = props => {
  
  const [categorys,setCategory] = useState([]);
  const [cards,setCard] = useState ([]);
  const [showForm,setShowForm] = useState(false)



  useEffect (()=>{
    axios.get(`/api/categorys/${props.match.params.id}`)
    .then( res => {
      setCategory(res.data,);
    })

    axios.get(`/api/categorys/${props.match.params.id}/cards`)
    .then( res => {
      setCard(res.data,);
    })

  },[])

  // t.string "question"
  // t.string "answer"
  // t.float "points"



  const renderCards =() =>{
    return cards.map(card =>(
      <Segment key={card.id}>

      <List.Header as="h3">{card.question}</List.Header>
      <List.Header as="h3">{card.answer}</List.Header>
      <List.Header as="h3">{card.points}</List.Header>
      <Button as={Link} to={`/categorys/${categorys.id}/cards/${card.id}`} color='blue'>
          View
        </Button>
    </Segment>

    ))
  }

  const addCard = (card) => setCard ([...cards, card,])
 
  useEffect (()=>{
    axios.post (`/api/categorys/${categorys.id}/cards`)
  })



 

    return (
      <>
      <Header as="h1">Edit Card</Header>
      <br />
      {/* { showForm && <CategorysForm toggleForm ={setShowForm} add = {addCategory}/>}
      <Button onClick ={()=> setShowForm (!showForm)}>
        { showForm ? "Close Form" : "Add "}
      </Button> */}
      <List>
        {renderCards()}

      </List>
    </>
    )
  
}

export default CategoryView;
