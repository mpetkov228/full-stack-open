import { useState } from 'react';

const VoteDisplay = ({ value }) => {
  return (
    <div>has {value} votes</div>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const maxVotes = Math.max(...points);
  const maxVotesIndex = points.indexOf(maxVotes);

  const handleNextClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleVoteClick = () => {
    const newPoints = [...points];
    newPoints[selected]++;
    setPoints(newPoints);
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          {anecdotes[selected]}
        </div>
        <VoteDisplay value={points[selected]} />
        <Button text="vote" handleClick={handleVoteClick} />
        <Button text="next anecdote" handleClick={handleNextClick} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[maxVotesIndex]}</div>
        <VoteDisplay value={points[maxVotesIndex]} />
      </div>
    </>
  );
};

export default App;