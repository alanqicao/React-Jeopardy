import React from 'react'
import {CategoryConsumer} from '../providers/CategoryProvider'

class PlayJeopardy extends React.Component {


  render(){
    return(
      <div>Jeopardy</div>
    )
  }
}

const ConnectedPlayJeopardy = (props) => {
  return(
    <CategoryConsumer>
      <PlayJeopardy {...props} />
    </CategoryConsumer>
  )
}

export default ConnectedPlayJeopardy