import WeekDayCard, { Habit, dayName } from "./WeekDayCard"

export type WeekContainerType = {
  weekDays:{
    monday:{
      habits:Habit[]
      tasks?:string
    },
    tuesday:{
      habits:Habit[]
      tasks?:string
    },
    wednesday:{
      habits:Habit[]
      tasks?:string
    },
    thursday:{
      habits:Habit[]
      tasks?:string
    },
    friday:{
      habits:Habit[]
      tasks?:string
    },
    saturday:{
      habits:Habit[]
      tasks?:string
    },
    sunday:{
      habits:Habit[]
      tasks?:string
    },
  },
  handleToggle: (dayName?: dayName, index?: number, habit?: Habit) => void
}

function WeekContainer({weekDays, handleToggle}: WeekContainerType) {
  return (
    <div className='week-container'>
      <WeekDayCard dayName='monday' habits={weekDays.monday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='tuesday' habits={weekDays.tuesday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='wednesday' habits={weekDays.wednesday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='thursday' habits={weekDays.thursday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='friday' habits={weekDays.friday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='saturday' habits={weekDays.saturday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='sunday' habits={weekDays.sunday.habits || []} handleToggle={handleToggle}/>
    </div>
  )
}

export default WeekContainer