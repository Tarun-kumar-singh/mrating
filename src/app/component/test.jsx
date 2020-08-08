import React, {  useState, useEffect } from 'react';

export default function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log(count)
});

  return (
    <div>
      <h2>Hello...</h2>
      </div>
  )
}
 
