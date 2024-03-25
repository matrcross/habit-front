// import WeekDaysForAsign from "./WeekDaysForAsign"

import { ChangeEvent, useState } from "react";

/*
  Tornar os outros editaveis
  transformar os habitlist em variavel
  apagar o input se tiver vazio e apagar da lista tambem (começar back?)
  começar a ver como fazer deploy disso e usar o dynamoDB
  talvez começar o drag 
*/

function WeekContainer() {
  const [inputValue, setInputValue] = useState('Routine A');
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Habits</h1>
      <div className="habit-list-test">
        <input className="input-habit" value={inputValue} onChange={handleInputChange}  type="text" placeholder="Write your new Habit..." />
        <input className="input-habit" type="text" placeholder="Write your new Habit..." /> 
        <input className="input-habit" value={'Routine B'} type="text" placeholder="Write your new Habit..." />
        <input className="input-habit" value={'Routine C'} type="text" placeholder="Write your new Habit..." /> 
      </div>
      {/* <ul className='habit-list'>
        <li className='habit'>Routine 1 
          <WeekDaysForAsign/>
        </li>
        <li className='habit'>Routine 2 <span className="no-asign">no asign</span></li>
        <input className="input-habit" type="text"placeholder="Write your new Habit..." />
        <li className='habit'>Routine 3 <span className="no-asign">no asign</span></li>
        <li className='habit'>Routine 4 <span className="no-asign">no asign</span></li>
      </ul> */}
    </div>
  )
}

export default WeekContainer