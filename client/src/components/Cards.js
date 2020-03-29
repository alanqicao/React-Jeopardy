import React from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Cards extends React.Component {
  state = {
    cards: []
  }


  componentDidMount() {
    axios.get(`api/categorys/${this.props.id}/cards`).then((res) => {
      this.setState({
        cards: res.data
      })
    }).catch(e => console.log(e))

  }

  formatCards = () => {
    const { cards } = this.state
    return (
      cards.map(card => {
        return (
          <Link>
            <div>
              {card.points}
            </div>
          </Link>
        )
      })
    )
  }


  render() {
    return (
      <div>
        {this.formatCards()}
      </div>
    )
  }
}

export default Cards