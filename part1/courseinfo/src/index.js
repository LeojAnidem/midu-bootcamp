import ReactDOM from 'react-dom'

const Title = ({text}) => <h1>{text}</h1>
const Content = ({text}) => <p>{text}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title text={course} />
      <Content text={`${part1}: ${exercises1}`} />
      <Content text={`${part2}: ${exercises2}`} />
      <Content text={`${part3}: ${exercises3}`} />
      <Content text={`Number of exercises: ${exercises1 + exercises2 + exercises3}`} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
