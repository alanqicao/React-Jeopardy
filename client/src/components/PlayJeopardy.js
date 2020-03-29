import React, { useEffect, useState } from "react";
import axios from 'axios'
import Cards from './Cards'
import { Grid } from "semantic-ui-react";

const PlayJeopardy = () => {
  const [categorys, setCategory] = useState([]);

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
          return <Cards id={id} />
        }
        return (
          <Grid.Column>
            <div key={`category-${category.id}`} style={{ border: '1px solid black' }}>
              {category.name}
              <div>
                {cardsFormatted(category.id)}
              </div>
            </div>
          </Grid.Column>

        )
      })
    )
  }


  return (
    <>

      <Grid container columns={4}>
        {renderCategories()}
      </Grid>
    </>
  )

}

export default PlayJeopardy