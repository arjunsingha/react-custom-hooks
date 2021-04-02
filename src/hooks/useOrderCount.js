import { useState, useEffect } from 'react';
// Custom hook is used to share logic between components.
// A parameter can be passed to it if required.
// The state used inside the custom hooks does not share data
function useOrderCountHook(randomStr, incrementCounter){
    const [orderCount, setOrderCount] = useState({count:0});
    useEffect(()=>{
        console.log('Use effect: '+randomStr);
    })
    const changeOrderCount = () => {
        setOrderCount({ count: orderCount.count + incrementCounter }) 
    }
    return { orderCount, changeOrderCount };
}
 

export default useOrderCountHook;