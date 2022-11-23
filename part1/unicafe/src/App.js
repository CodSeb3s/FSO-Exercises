import {useState} from 'react'

const Button = ({text, handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({text, good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = (good * 100) / all + '%'
  return (
    <table>
      <tbody>
        <StatisticLine text={text[0]} value={good} />
        <StatisticLine text={text[1]} value={neutral} />
        <StatisticLine text={text[2]} value={bad} />
        <StatisticLine text={text[3]} value={all} />
        <StatisticLine text={text[4]} value={average} />
        <StatisticLine text={text[5]} value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const option = ['good', 'neutral', 'bad', 'all', 'average', 'positive']

  return (
    <div>
      <h3>give feedback</h3>
      <Button text={option[0]} handleClick={() => setGood(good + 1)} />
      <Button text={option[1]} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={option[2]} handleClick={() => setBad(bad + 1)} />
      <h3>statistics</h3>
      {!good && !neutral && !bad ? <p>No feedback given</p> : <Statistics text={option} good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

export default App
