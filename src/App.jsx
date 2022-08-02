import React, { useReducer } from 'react'
import "./styles.css"

const ACTION = {
  ADD_DIGIT: 'add-didgit',
  CLEAR: 'clear',
  CHOOSE_OPERATION: 'choose-operation',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
switch(type) {
  case ACTIONS.ADD_DIGIT:
    return {
      ...state,
      currentOperand: `${currentOperand || ""} ${payload.digit}`
    }
  }
}

function App() {
const [{currentOperand, previousOperand, operation }, dispatch] =useReducer(reducer,
  {})
  
  dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">69696969</div>
        <div className="current-operand">69696969</div>
      </div>
   <button className="span-two">AC</button>
   <button>DEL</button>
   <button>/</button>
   <button>1</button>
   <button>2</button>
   <button>3</button>
   <button>*</button>
   <button>4</button>
   <button>5</button>
   <button>6</button>
   <button>+</button>
   <button>7</button>
   <button>8</button>
   <button>9</button>
   <button>-</button>
   <button>.</button>
   <button>0</button>
   <button className="span-two">=</button>

    </div>
  )
}

export default App
