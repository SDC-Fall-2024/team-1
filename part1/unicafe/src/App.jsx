import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.statistic}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if (props.good != 0 || props.neutral || 0 && props.bad || 0) {
    return (
      <table>
        <StatisticLine text = ' Good:' statistic = {props.good}/>
        <StatisticLine text = ' Neutral:' statistic ={props.neutral}/>
        <StatisticLine text = ' Bad:' statistic ={props.bad}/>
        <StatisticLine text = ' All:' statistic ={props.good + props.neutral + props.bad}/>
        <StatisticLine text = ' Average:' statistic ={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
        <StatisticLine text = ' Positive:' statistic ={100*(props.good/(props.good+props.neutral+props.bad))}/>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> Give Feedback</h1>
      <Button onClick = {setToGood} text = 'good'/>
      <Button onClick = {setToNeutral} text = 'neutral' />
      <Button onClick = {setToBad} text = 'bad'/>
      <br/>
      <h1> Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
