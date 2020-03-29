import React from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'
import AnswerResult from './AnswerResult'
class ShowCard extends React.Component {
  state = {
    question: '',
    typeOfQuestion: '',
    correctAnswer: '',
    answers: [],
    result: 'none',
    userAnswer: 'none'
  }

  componentDidMount() {
    axios.get(`/api/cards/${this.props.match.params.id}/questions`)
      .then(res =>
        this.setState({
          question: res.data[0].question,
          typeOfQuestion: res.data[0].type_of_question,
          correctAnswer: res.data[0].correct_answer,
          answers: [
            res.data[0].answer_1,
            res.data[0].answer_2,
            res.data[0].answer_3,
            res.data[0].answer_4,
          ]
        })
      )
      .catch(e => console.log(e))
  }
  changeBackgroundIn(e) {
    e.target.style.background = '#3790a6';
  }
  changeBackgroundOut(e) {
    e.target.style.background = '#49b6d1'
  }

  renderAnswers() {
    const { answers, typeOfQuestion } = this.state
    if (typeOfQuestion === 'Multiple Choice') {
      if (answers.length > 0) {
        return (
          answers.map((answer) => {
            return (
              <Segment
                style={style.answer}
                onClick={() => this.checkIfCorrect(answer)}
                onMouseOver={this.changeBackgroundIn}
                onMouseOut={this.changeBackgroundOut}
              >
                {answer}
              </Segment>
            )
          }))
      }
    }
  }

  checkIfCorrect = (answer) => {
    const { correctAnswer } = this.state
    if (correctAnswer === answer) {
      document.getElementById('answer').style.display = 'none'
      return (
        this.setState({
          result: 'Correct',
          userAnswer: answer
        })
      )
    }
    else {
      document.getElementById('answer').style.display = 'none'
      return (
        this.setState({
          result: 'Wrong',
          userAnswer: answer
        })
      )
    }
  }

  render() {
    const { question } = this.state
    return (
      <div>
        <Segment style={style.question} id='question'>
          <div style={{ textAlign: 'center' }}>
            {question}?
        </div>
        </Segment>
        <Segment basic >
          <div id='answer'>
            {this.renderAnswers()}
          </div>
        </Segment>
        <Segment basic>
          <AnswerResult
            result={this.state.result}
            correctAnswer={this.state.correctAnswer}
            userAnswer={this.state.userAnswer}
          />
        </Segment>
      </div>
    )
  }
}

const style = {
  question: {
    backgroundColor: '#282b2b',
    color: 'white',
  },
  answer: {
    cursor: 'pointer',
    backgroundColor: '#49b6d1',
    color: 'white',
    border: '1px solid white'
  }
}

export default ShowCard