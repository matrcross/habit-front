// import { useState } from 'react'
import './App.css'
import HabitList from './components/HabitList'
import WeekContainer from './components/WeekContainer'
import { Habit, dayName } from './components/WeekDayCard'
import { useWeekdays } from './hooks/useWeekdays'
import { Weekdays } from './types/Weekdays'

function App() {
  const weekdays: Weekdays = useWeekdays()
  
  const handleToggle= (dayName?: dayName, index?: number, habit?: Habit) => {
    if(dayName && habit && index !== undefined ){
        const weekdaysUpdated = {...weekdays}
        habit.complete = !habit.complete
        weekdaysUpdated[dayName].habits[index] = habit

        // setWeekdays(weekdaysUpdated)
    }
  }

  return (
    <div className='center'>
   <HabitList/>
   <WeekContainer weekdays={weekdays} handleToggle={handleToggle}/>
   <h1 className='tasks-title'>Tasks</h1>
   <WeekContainer weekdays={weekdays}handleToggle={handleToggle}/>
    </div>
  )
}

export default App
