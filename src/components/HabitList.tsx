import WeekDaysForAsign from "./WeekDaysForAsign"
import {KeyboardEvent, useRef, useState} from "react";


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

  const handleKeys= (e: KeyboardEvent<HTMLDivElement>, habitId: number, index: number) => {
    const element = habitRef.current[index]
    
    if(e.key == 'Backspace' 
    && element.textContent == ''
    && index != 0
    ){
      const updatedHabitList = habitList.filter(habit => habit.id !== habitId);
      setHabitList(updatedHabitList);

      setTimeout(() => {
        const aboveHabit = habitRef.current[index-1]
        if (aboveHabit) {
          aboveHabit.focus()
        }
      }, 0);
    }

    if(e.key == 'Enter'){
      e.preventDefault();
      if(index == (habitList.length-1)){
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
              // onInput={handleChange}
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