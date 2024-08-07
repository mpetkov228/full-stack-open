import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
        <p>good</p>
        <p>neutral</p>
        <p>bad</p>
      </div>
    </div>
  );
};

export default App;