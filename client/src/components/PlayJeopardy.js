import React, { useEffect, useState } from "react";
import axios from 'axios'
import Cards from './Cards'
import { Grid, Segment } from "semantic-ui-react";

const PlayJeopardy = () => {
  const [categorys, setCategory] = useState([]);
  var points = 0
  useEffect(() => {
    axios.get(`/api/categorys/`)
      .then(res => {
        setCategory(res.data);
      })

  }, [])


  const renderCategories = () => {
    return (
      categorys.map(category => {
        const cardsFormatted = (id) => {
          return <Cards key={`categoryCard-${id}`} id={id} />
        }
        return (
          <Grid.Column style={{ margin: '0', }}>
            <Segment inverted basic style={{backgroundColor:'#282b2b'}}>
              <div key={`category-${category.id}`} style={{textAlign: 'center', margin: '0' }}>
                {category.name}
                <div>
                  {cardsFormatted(category.id)}
                </div>
              </div>
            </Segment>
          </Grid.Column>


        )
      })
    )
  }


  return (
    <>
    <div>
      points:{points}
    </div>
      <Grid container columns={4} >
        {renderCategories()}
      </Grid>
    </>
  )

}

export default PlayJeopardy