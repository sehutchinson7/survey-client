const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateAnswer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createAnswer(data)
    .then(ui.createAnswerSuccess)
    .catch(ui.createAnswerFailure)
  // console.log('working')
}
const onShowAnswer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showAnswer(data.answer.id)
    .then(ui.showAnswerSuccess)
    .catch(ui.showAnswerFailure)
}
const onIndexAnswer = function () {
  event.preventDefault()
  api.indexAnswer()
    .then(ui.indexAnswerSuccess)
    .catch(ui.indexAnswerFailure)
}

const addHandlers = function () {
  $('#create-answer').on('submit', onCreateAnswer)
  $('#index-answer').on('submit', onIndexAnswer)
  $('#show-answer').on('submit', onShowAnswer)
  // $('#delete-answer').on('submit', onDeleteAnswer)
  // $('#update-answer').on('submit', onUpdateAnswer)
}
module.exports = {
  addHandlers
}