const Part = ({name, exercises}) => {
  return (
    <p>
      <strong>{name}:</strong> 
      {exercises}
    </p>
  )
}

const Course = ({id, name, parts}) => {
  const totalExercises = parts.reduce((acc, part) => acc += part.exercises, 0)
  
  return (
    <div>
      <h1>{name}</h1>
      {
        parts.map((part) => {
          return (
            <Part key={part.id} {...part} />
          )
        })
      }
      <h3>
        Total of {totalExercises} exercises!
      </h3>
    </div>
  )
}

export const Courses = ({data}) => {
  return (
    <div>
      {
        data.map((course) => 
          <Course key={course.id} {...course}/> )
      }
    </div>
  )
}