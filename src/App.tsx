// import { useState } from 'react'
import './App.css'
import HabitList from './components/HabitList'
import WeekContainer from './components/WeekContainer'

function App() {
  const weekDays = {
    monday: {
      habits:[{
        id:0,
        name:'Routine A',
        asign:false,
        complete: false
       },
       {
        id:0,
        name:'Routine B',
        asign:false,
        complete: false
       }]
    },
    tuesday: {
      habits:[{
        id:0,
        name:'Routine A',
        asign:false,
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
  }
  return (
    <div className='center'>
   <HabitList/>
   <WeekContainer weekDays={weekDays}/>
   <h1 className='tasks-title'>Tasks</h1>
   <WeekContainer weekDays={weekDays}/>
    </div>
  )
}

export default App
