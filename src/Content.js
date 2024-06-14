import React, { useState } from 'react';

function Content() {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Content;
