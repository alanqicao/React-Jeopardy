import React, { useEffect, useState } from "react";
import axios from 'axios'

const PlayJeopardy = () => {

  const [categorys, setCategory] = useState([]);



  useEffect(() => {
    axios.get(`/api/categorys/`)
      .then(res => {
        setCategory(res.data);
      })

  }, [])

  const getCards = (id) => {
    let cards = []
    axios.get(`api/categorys/${id}/cards`).then((res) => {
      cards.push(res.data)
    }).catch(e => console.log(e))
    return (cards)
  }

  const renderCategories = () => {
    return (
      categorys.map(category => {
        let cards = getCards(category.id)
        const formatCards = (cards) => {
            cards.map(card => {
              return (<div key={`key-${card.id}`}>{card.points}</div>)
            })
        }
        return (
          <div key={`category-${category.id}`}>
            {category.name}
            <div>
              {()=> formatCards(cards)}
            </div>
          </div>

        )
      })
    )
  }


  return (
    <>
      {renderCategories()}
      <div>Jeopardy</div>
    </>
  )

}

export default PlayJeopardy