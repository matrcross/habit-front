import { Habit } from "../components/WeekDayCard"

export type Weekdays = {
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
  }