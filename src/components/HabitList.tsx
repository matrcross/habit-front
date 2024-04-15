// import WeekDaysForAsign from "./WeekDaysForAsign"
import {useState, ChangeEvent } from "react";

/*
  Tornar os outros editaveis
  transformar os habitlist em variavel
  apagar o input se tiver vazio e apagar da lista tambem (começar back?)
  começar a ver como fazer deploy disso e usar o dynamoDB
  talvez começar o drag 
*/

function WeekContainer() {
  const [showAfter, setShowAfter] = useState(true)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowAfter(true);
    if(e.target.innerText){
      setShowAfter(false);
    }
    
  };

  return (
    <div>
      <h1>Habits</h1>
      <div className="habit-list-test">
        <div 
        onInput={handleChange}
        className={`editable-div ${showAfter ? 'show-after' : ''}`}  
        contentEditable="true">
        </div>
        <div 
        onInput={handleChange}
        className={`editable-div ${showAfter ? 'show-after' : ''}`}  
        contentEditable="true">
        </div>

      </div>
      {/* <ul className='habit-list'>
        <li className='habit'>Routine 1 
        <WeekDaysForAsign/>
        </li>
        <input className="input-habit" type="text"placeholder="Write your new Habit..." />
        <li className='habit'>Routine 2 <span className="no-asign">no asign</span></li>
        <li className='habit'>Routine 3 <span className="no-asign">no asign</span></li>
        <li className='habit'>Routine 4 <span className="no-asign">no asign</span></li>
      </ul> */}
    </div>
  )
}

export default WeekContainer