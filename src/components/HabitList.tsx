// import WeekDaysForAsign from "./WeekDaysForAsign"
import {ChangeEvent, KeyboardEvent, useState} from "react";

/*
  Tornar os outros editaveis
  transformar os habitlist em variavel
  apagar o input se tiver vazio e apagar da lista tambem (começar back?)
  começar a ver como fazer deploy disso e usar o dynamoDB
  talvez começar o drag 
*/

function WeekContainer() {
  const [habitList, setHabitList] = useState([
    {
      id: 0,
      name:'Routine A',
      asignAt:''
    },
    {
      id: 1,
      name:'Routine B',
      asignAt:''
    },
  ])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    target.classList.toggle('show-after', target.textContent?.trim() == '')
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, habitId: number) =>{
    const focusedElement = e.target as HTMLElement;

    if(e.key == 'Backspace' 
    && focusedElement.textContent == ''
    && habitId != 0
    ){
      const updatedHabitList = habitList.filter(habit => habit.id !== habitId);
      setHabitList(updatedHabitList);
      const aboveHabit = document.getElementById(`habit-${habitId-1}`)
      aboveHabit?.focus()
    }

    if(e.key == 'Enter'){
      e.preventDefault();
      if(habitId == (habitList.length-1)){
        const emptyHabit = {
          id: habitId+1,
          name: '',
          asignAt: ''
        }
  
        setHabitList([...habitList, emptyHabit])
        setTimeout(() => {
          const newlyCreatedDiv = document.getElementById(`habit-${emptyHabit.id}`);
          if (newlyCreatedDiv) {
            newlyCreatedDiv.classList.add('show-after');
            newlyCreatedDiv.focus()
          }
        }, 0);
      }
      document.getElementById(`habit-${habitId+1}`)?.focus()
      }
      
  }


  return (
    <div>
      <h1>Habits</h1>
      <div className="habit-list-test">
        {habitList.map((habit, index)=>(
          <div 
          key={habit.id}
          id={`habit-${habit.id}`}
            onInput={handleChange}
            className='editable-div' 
            contentEditable="true"
            onKeyDown={(event) => handleKeyDown(event, index)}>
              {habit.name}
            </div>
        ))}
      </div>
      {/* <div className="habit-list-test">
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
      </div> */}
    </div>
  )
}

export default WeekContainer