import WeekDaysForAsign from "./WeekDaysForAsign"
import {ChangeEvent, KeyboardEvent, useRef, useState} from "react";


function WeekContainer() {
  const habitRef = useRef<HTMLDivElement[]>([])

  
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

  const handleBackspaceKey = (habitId: number, index:number) => {
    const updatedHabitList = habitList.filter(habit => habit.id !== habitId);
    setHabitList(updatedHabitList);

    setTimeout(() => {
      const aboveHabit = habitRef.current[index-1]
      if (aboveHabit) {
        aboveHabit.focus()
      }
    }, 0);
  }

  const handleEnterKey = (habitId: number, index:number) => {
    const emptyHabit = {
      id: habitId+1,
      name: '',
      asignAt: ''
    }

    setHabitList([...habitList, emptyHabit])
    setTimeout(() => {
      const newlyCreatedDiv = habitRef.current[index+1];
      if (newlyCreatedDiv) {
        newlyCreatedDiv.focus()
      }
    }, 0);
  }

  const handleMovingKeys = (movement: string, index: number) => {
    if(movement == 'ArrowUp'){
      const aboveHabit = habitRef.current[index-1]
      if (aboveHabit) {
        aboveHabit.focus()
      }
    }

    if(movement == 'ArrowDown'){
      const belowHabit = habitRef.current[index+1]
      if (belowHabit) {
        belowHabit.focus()
      }
    }
  }

  const handleKeys= (e: KeyboardEvent<HTMLDivElement>, habitId: number, index: number) => {
    const element = habitRef.current[index]
    
    if(e.key == 'ArrowUp' || e.key == 'ArrowDown') 
      handleMovingKeys(e.key, index)

    if(e.key == 'Backspace' && element.textContent == '' && index != 0)
      handleBackspaceKey(habitId, index)
    
    if(e.key == 'Enter'){
      e.preventDefault();
      if(index == (habitList.length-1)) 
        handleEnterKey(habitId, index)
      }
  }

  return (
    <div>
      <h1>Habits</h1>
      <div className="habit-list-test">
      
        {habitList.map((habit, index)=>(
          <div className="habit-item">
            <div

            ref={el => el && (habitRef.current[index] = el)}
            key={habit.id}
            id={`habit-${habit.id}`}
              onInput={handleChange}
              className={`editable-div ${habit.name.trim() == '' ? 'show-after' : ''}`}
              contentEditable="true"
              onKeyDown={(e) => handleKeys(e, habit.id, index)}>
                {habit.name}
              </div>
             <WeekDaysForAsign/>
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