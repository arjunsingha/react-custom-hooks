import React from 'react';
// import useOrderCountHook from './hooks/useOrderCount';
import Counter from './Counter'
import CounterAgain from './CounterAgain'
import './App.css';

function App() {
  // const orderHook = useOrderCountHook('App');
  return (
    <div className="App">
      {/* <h1>count:{orderHook.orderCount.count}</h1>
       <button type='button' onClick={orderHook.changeOrderCount}>Increment</button>
       <br /><br /><br /> */}
       <Counter />
       <br /><br /><br />
       <CounterAgain />
    </div>
  );
}

export default App;
