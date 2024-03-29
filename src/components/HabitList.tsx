// import WeekDaysForAsign from "./WeekDaysForAsign"
import {ChangeEvent} from "react";

/*
  Tornar os outros editaveis
  transformar os habitlist em variavel
  apagar o input se tiver vazio e apagar da lista tambem (começar back?)
  começar a ver como fazer deploy disso e usar o dynamoDB
  talvez começar o drag 
*/

function WeekContainer() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    target.classList.toggle('show-after', target.textContent?.trim() == '')
  };

  return (
    <div>
      <h1>Habits</h1>
      <div className="habit-list-test">
        <div 
        onInput={handleChange}
        className='editable-div show-after' 
        contentEditable="true">
        </div>
        <div 
        onInput={handleChange}
        className='editable-div show-after'  
        contentEditable="true">
        </div>

      </div>
    </div>
  )
}

export default WeekContainer