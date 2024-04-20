
export type Habit = {
  id: number,
  name: string,
  assignedFor:boolean,
  complete: boolean
}

export type dayName = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

type WeekDayCard = {
dayName: dayName, 
habits:Habit[],
handleToggle: (dayName: dayName, index: number, habit: Habit) => void
}


function WeekDayCard({dayName, habits, handleToggle}: WeekDayCard) {

return (
  <>
  <div className=''>
      <h2>{dayName}</h2>
      <div className="week-day-card">
      <ul>{
          habits.map((habit, index)=>(
            <li className='check-habits' key={habit.id}>
              <input 
              checked={habit.complete}
              type="checkbox" 
              onChange={() => handleToggle(dayName, index, habit)}
              />
              <span className="habit-on-card">{habit.name}</span>
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