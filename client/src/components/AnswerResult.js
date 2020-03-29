import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AnswerResult extends React.Component {
  changeBackgroundIn(e) {
    e.target.style.background = '#697a80';
  }
  changeBackgroundOut(e) {
    e.target.style.background = '#849aa1'
  }

  continueButton = () => (
    <div>
    <Link to='/playjeopardy'>
      <Segment
        style={style.continue}
        onMouseOver={this.changeBackgroundIn}
        onMouseOut={this.changeBackgroundOut}
      >
        Continue
      </Segment>
    </Link>
  </div>
  )

  getResult() {
    const { result, userAnswer, correctAnswer } = this.props
    if (result === 'none') {
      return (
        <div></div>
      )
    }
    else if (result === 'Correct') {
      return (
        <Segment textAlign='center' style={style.container}>
          <Segment>
            <div style={style.correctHeader}>CORRECT!</div>
          </Segment>
          <div>
            <h3>You answered "{userAnswer}" which is CORRECT</h3>
            <h3>Well Done Friend!</h3>
          </div>
          {this.continueButton()}
        </Segment>
      )
    }
    else {
      return (
        <Segment textAlign='center' style={style.container}>
          <Segment>
            <div style={style.wrongHeader}>INCORRECT!</div>
          </Segment>
          <div>
            <h3>Im sorry but you answered "{userAnswer}"</h3>
            <h3>when the correct answer is "{correctAnswer}"</h3>
          </div>
          {this.continueButton()}
        </Segment>
      )
    }
  }

  render() {
    return (
      <div>
        {this.getResult()}
      </div>
    )
  }
}

const style = {
  correctHeader: {
    color: '#54cc5e',
    fontSize: '50px',
    textAlign: 'center',
    padding: '5px 0',

  },
  wrongHeader: {
    color: '#d65151',
    fontSize: '50px',
    textAlign: 'center',
    padding: '5px 0',
  },
  container: {
    backgroundColor: '#49b6d1',
    color: 'white',
    border: '1px solid white'
  },
  continue: {
    marginTop: '50px',
    color: 'white',
    backgroundColor: '#849aa1',
    border: 'none',
    boxShadow: '2px 2px 2px #444'
  }
}

export default AnswerResult