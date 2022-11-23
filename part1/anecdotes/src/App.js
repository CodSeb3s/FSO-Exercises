import {useState} from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const arrayLengthAnecdotes = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)
  const [points, setPoints] = useState(arrayLengthAnecdotes)

  const randomAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNum)
  }

  const votesFn = (arr, idx) => {
    let newCopy = [...arr]
    newCopy[idx] += 1
    setPoints(newCopy)
  }

  const maxVotedValue = Math.max(...points)
  const idxMostVoted = points.indexOf(maxVotedValue)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => votesFn(points, selected)}>vote</button>
      <button onClick={() => randomAnecdote()}>next anecdote</button>
      <h1>Anecdote with most views</h1>
      <p>{anecdotes[idxMostVoted]}</p>
      <p>has {points[idxMostVoted]} votes</p>
    </div>
  )
}

export default App
