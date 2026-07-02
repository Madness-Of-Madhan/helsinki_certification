import React from 'react'

export const Content = (props) => {
  return (
    <div>
        <div>
        <h2>{props.part1}</h2>
        <p>{props.exercises1}</p>
        </div>
        <div>
        <h2>{props.part2}</h2>
        <p>{props.exercises2}</p>
        </div>
        <div>
        <h2>{props.part3}</h2>
        <p>{props.exercises3}</p>
        </div>
    </div>
  )
}
