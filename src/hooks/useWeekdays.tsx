import { useEffect, useState } from "react"
import axios from "axios"
import { Weekdays } from "../types/Weekdays"

export const useWeekdays = () : Weekdays => {
  const [weekdays, setWeekdays] = useState<Weekdays>({
    monday: {
      habits:[]
    },
    tuesday: {
      habits:[]
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

  const fetchWeekdays = async () => {

  const response = await axios.get('http://localhost:3000/weekdays/8e687a56-abd4-4e6a-ad8c-dc50b7f4ad3e')

  if (response) setWeekdays(response.data)
  }

  useEffect(()=>{
    fetchWeekdays()
  }, [])


  return weekdays
}