const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ sum }) => <p><strong>total of {sum} exercises</strong></p>;

const Part = ({ name, exercises }) =>
  <p>
    {name} {exercises}
  </p>;

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part
        key={part.id}
        name={part.name}
        exercises={part.exercises}
      />
    )}
  </>;

const Course = ({ course }) => {
  const sum = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </div>
  );
};

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: 3,
          name: 'State of a component',
          exercises: 14
        },
        {
          id: 4,
          name: 'Redux',
          exercises: 11
        }
      ],
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 3
        },
        {
          id: 2,
          name: 'Middlewares',
          exercises: 7
        }
      ]
    }
  ]

  return (
    <>
      {courses.map(course => {
        return <Course key={course.id} course={course} />
      })}
    </>
  );
}

export default App;