import WeekDayCard, { Habit } from "./WeekDayCard"

export type WeekContainerType = {
  weekDays:{
    monday:{
      habits?:Habit[]
      tasks?:string
    },
    tuesday:{
      habits?:Habit[]
      tasks?:string
    },
    wednesday:{
      habits?:Habit[]
      tasks?:string
    },
    thursday:{
      habits?:Habit[]
      tasks?:string
    },
    friday:{
      habits?:Habit[]
      tasks?:string
    },
    saturday:{
      habits?:Habit[]
      tasks?:string
    },
    sunday:{
      habits?:Habit[]
      tasks?:string
    },
  }
}

function WeekContainer({weekDays}:WeekContainerType) {
  return (
    <div className='week-container'>
      <WeekDayCard weekDay='Monday' habits={weekDays.monday.habits || []} tasks={weekDays.monday.tasks || ''}/>
      <WeekDayCard weekDay='Tuesday' habits={weekDays.tuesday.habits || []} tasks={weekDays.monday.tasks || ''}/>
      <WeekDayCard weekDay='Wednesday' habits={weekDays.wednesday.habits || []} tasks={weekDays.monday.tasks || ''}/>
      <WeekDayCard weekDay='Thursday' habits={weekDays.thursday.habits || []} tasks={weekDays.monday.tasks || ''}/>
      <WeekDayCard weekDay='Friday' habits={weekDays.friday.habits || []} tasks={weekDays.monday.tasks || ''}/>
      <WeekDayCard weekDay='Saturday' habits={weekDays.saturday.habits || []} tasks={weekDays.monday.tasks || ''}/>
      <WeekDayCard weekDay='Sunday' habits={weekDays.sunday.habits || []} tasks={weekDays.monday.tasks || ''}/>
    </div>
  )
}

export default WeekContainer