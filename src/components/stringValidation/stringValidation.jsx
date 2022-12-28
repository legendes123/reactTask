import React, { useState } from 'react';
import cl from './stringValidation.module.css';


function StringValidation() {
  const [rightVal, setRightVal] = useState(0);
  const [falseVal, setFalseVal] = useState(0);
  const [valInput, setValInput] = useState('');
  function checkBrackets() {
    let closeVal = 0;
    let openVal = 0;
    const circleParentheses = [];
    const squareParentheses = [];
    const curlyParentheses = [];
    for (const val of valInput) {
      switch (val) {
        case '(':
          circleParentheses.push(val);
          break;
        case '[':
          squareParentheses.push(val);
          break;
        case '{':
          curlyParentheses.push(val);
          break;
        case ')':
          circleParentheses.pop()
            ? closeVal += 2
            : openVal += 1;
          break;
        case ']': squareParentheses.pop()
          ? closeVal += 2
          : openVal += 1;
          break;
        case '}':
          curlyParentheses.pop()
            ? closeVal += 2
            : openVal += 1;
          break;
        default:
          break;
      }
    }
    openVal = openVal + circleParentheses.length + squareParentheses.length + curlyParentheses.length;
    setRightVal(closeVal);
    setFalseVal(openVal);
  }

  return (
    <div className={cl.container}>
      <input  onChange={(e) => setValInput(e.target.value.split(''))} className={cl.validation__input} placeholder="введите строку" />
      <button onClick={checkBrackets} type="button" className={cl.validation__button}>Проверить</button>
      <p>
        Закрыты:
        {' '}
        {rightVal}
      </p>
      <p>
        Не закрыты:
        {' '}
        {falseVal}
      </p>
    </div>
  );
}

export default StringValidation;
