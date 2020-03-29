import React from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'
import AnswerResult from './AnswerResult'
class ShowCard extends React.Component {
  state = {
    question: '',
    typeOfQuestion: '',
    correctAnswer: '',
    answers: []
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

  renderQuestions() {
    const { answers, typeOfQuestion } = this.state
    if (typeOfQuestion === 'Multiple Choice') {
      if (answers.length > 0) {
        return (
          answers.map((answer) => {
            return (
              <Segment onClick={()=> this.checkIfCorrect(answer)}>
                {answer}
              </Segment>
            )
          }))
      }
    }
  }
  
  checkIfCorrect = (answer) => {
    const {correctAnswer} = this.state
    if(correctAnswer === answer){
      return(
        <AnswerResult result={'Correct'}/>
      )
    }
    else{
      return(
        <AnswerResult result={'Wrong'}/>
      )
    }
  }

  render() {
    const { question } = this.state
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          {question}?
        </div>
        <Segment>
          {this.renderQuestions()}
        </Segment>
      </div>
    )
  }
}

export default ShowCard