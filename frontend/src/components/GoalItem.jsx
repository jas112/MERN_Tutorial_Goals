import React from 'react'

function GoalItem({goal}) {
  return (
    <div className="goal">
        <div>
            {new Date(goal.CreatedAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
    </div>
  )
}

export default GoalItem