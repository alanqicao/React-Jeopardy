import React,{useState} from "react";
import { Button, Header, Icon, Segment, List } from "semantic-ui-react";
import CategorysForm from "./CategorysForm"
import { Link, } from "react-router-dom";

const Category = props => {

  const [showEdit, setShowEdit] = useState(false)

  const toggle = () => {
    setShowEdit({ showEdit: !showEdit })
  }


  const {id,deleteCategory,editCategory,name,addCategory} = props
  
  return (
    
    <Segment key={id}>

      <List.Header as="h3">{name}</List.Header>
      <Button as={Link} to={`/categorys/${id}`} color='blue'>
        View
      </Button>
      <Button onClick={() => deleteCategory(id)} color='red'>Delete Category</Button>
      <Button onClick={toggle} color='pink' >Edit Category</Button>
      {showEdit ? (
        <CategorysForm toggleEdit={toggle} {...props} editCategory={editCategory} isEditing={true} add = {addCategory}/>
      ) : (
          <></>
        )}
    </Segment>





  );

}

export default Category;
