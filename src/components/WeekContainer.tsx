import WeekDayCard, { Habit, dayName } from "./WeekDayCard"

export type WeekContainerType = {
  weekdays:{
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

function WeekContainer({weekdays, handleToggle}: WeekContainerType) {
  return (
    <div className='week-container'>
      <WeekDayCard dayName='monday' habits={weekdays.monday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='tuesday' habits={weekdays.tuesday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='wednesday' habits={weekdays.wednesday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='thursday' habits={weekdays.thursday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='friday' habits={weekdays.friday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='saturday' habits={weekdays.saturday.habits || []} handleToggle={handleToggle}/>
      <WeekDayCard dayName='sunday' habits={weekdays.sunday.habits || []} handleToggle={handleToggle}/>
    </div>
  )
}

export default WeekContainer