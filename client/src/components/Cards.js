import React from 'react'
import axios from 'axios'
import { Segment} from 'semantic-ui-react'
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
          <div key={`card-${card.id}`}>
          <Link to={`/showCard/${card.id}`}>
            <Segment style={{color:'white', backgroundColor:'#49b6d1', border:'1px solid white', margin:'5px 0 '}}>
              {card.points}
            </Segment>
          </Link>
          </div>
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