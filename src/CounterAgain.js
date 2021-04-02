import React from 'react';
import useOrderCountHook from './hooks/useOrderCount'; 

const CounterAgain = () => {
    const incrementCounter = 3;
    const orderHook = useOrderCountHook('Counter Again', incrementCounter);
    return ( 
    <div className="App">
      <h1>counter again:{orderHook.orderCount.count}</h1>
       <button type='button' onClick={orderHook.changeOrderCount}>Increment by {incrementCounter}</button>
    </div>
     );
}



export default CounterAgain;