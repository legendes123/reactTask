import React, { useEffect} from 'react';
import useSecond from '../../../hooks/useSecond';
const Card = (props) => {
  const {removeCard, item, card} = props;
  const index = card.findIndex(i => i == item) + 1;
  const lastSecond = useSecond(item.randomNum);
  useEffect(() => {
       if(lastSecond <= 0){
         removeCard(props.item.id);
       }
    },[lastSecond,removeCard,item]
    );
  return (
    <div>
      <p>{index} Это сообщение исчезнит через: {lastSecond}</p>
    </div>
  );
};

export default Card;
