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
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;