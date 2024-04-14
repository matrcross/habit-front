// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import HabitList from './components/HabitList'
import WeekContainer from './components/WeekContainer'
import { Habit, dayName } from './components/WeekDayCard'

function App() {
  const [weekDays, setWeekDays] = useState({
    monday: {
      habits:[{
        id:0,
        name:'Routine A',
        assignedFor:false,
        complete: false
       },
       {
        id:1,
        name:'Routine B',
        assignedFor:false,
        complete: false
       }]
    },
    tuesday: {
      habits:[{
        id:2,
        name:'Routine A',
        assignedFor:false,
        complete: false
       },]
    },
    wednesday: {
      habits:[]
    },
    thursday: {
      habits:[]
    },
    friday: {
      habits:[]
    },
    saturday: {
      habits:[]
    },
    sunday: {
      habits:[]
    },
  })


  const handleToggle= (dayName?: dayName, index?: number, habit?: Habit) => {


    if(dayName && habit && index !== undefined ){
        const weekDaysUpdated = {...weekDays}
        habit.complete = !habit.complete
        weekDaysUpdated[dayName].habits[index] = habit

        setWeekDays(weekDaysUpdated)
    }
  
  }

  return (
    <div className='center'>
   <HabitList/>
   <WeekContainer weekDays={weekDays} handleToggle={handleToggle}/>
   <h1 className='tasks-title'>Tasks</h1>
   <WeekContainer weekDays={weekDays}handleToggle={handleToggle}/>
    </div>
  )
}

export default App
