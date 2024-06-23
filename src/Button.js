import React, { useState } from 'react'; 

  

const Button = () => { 

  const [count, setCount] = useState(0); 

  

  const handleClick = () => { 

    console.log('Button clicked!'); 

    setCount(count + 1); 

  }; 

  

  return ( 

    <div> 

      <button onClick={handleClick}>Click Me</button> 

      <p>Button clicked {count} times</p> 

    </div> 

  ); 

}; 

  

export default Button; 

 