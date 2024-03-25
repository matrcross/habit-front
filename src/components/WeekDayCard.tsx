
export type Habit={
    id: number,
    name: string,
    asign:boolean,
    complete: boolean
}

type WeekDayCard = {
  weekDay:string , 
  habits:Habit[],
  tasks:string
}


function WeekDayCard({weekDay, habits, tasks}: WeekDayCard) {
  console.log(tasks)
  return (
    <>
    <div className=''>
        <h2>{weekDay}</h2>
        <div className="week-day-card">
        <ul>{
            habits.map(habit=>(
              <li className='check-habits' key={habit.id}>
                <input type="checkbox"/>
                {habit.name}
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </>
  )
}

export default WeekDayCard