import React from 'react';
import useOrderCountHook from './hooks/useOrderCount'; 

const Counter = () => {
    const incrementCounter = 1;
    const orderHook = useOrderCountHook('Counter', incrementCounter);
    return ( 
    <div className="App">
      <h1>counter:{orderHook.orderCount.count}</h1>
       <button type='button' onClick={orderHook.changeOrderCount}>Increment by {incrementCounter}</button>
    </div>
     );
}



export default Counter;