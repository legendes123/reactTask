import React, {  useState } from 'react';
import Card from './card/card';
import cl from './form.module.css';

function Form() {
  const [card, setCard] = useState([]);
  const [val, setVal] = useState(1);
  const [randomNum, setRandomNum] = useState(15);
  const finishTime = Date.now() + randomNum * 1000;
  function addCard(){
    setVal((prev)=> prev + 1)
    setRandomNum(Math.floor(Math.random() * (30 - 10 + 1) + 10))
    setCard((prev)=> [...prev,{
      id:val,
      randomNum:finishTime
    }])

  }
  function removeCard(id){
      setCard([...card.filter((product) => product.id !== id)]);
  }
  return (
    <div className={cl.container}>
      <button className={cl.form__button} onClick={addCard}>Добавить</button>
      <div>
        {card.map((item) =>
          <div><Card removeCard={removeCard}  item={item} card={card} key={item.id}></Card>
          </div>
          )}
      </div>
    </div>
  );
}

export default Form;
