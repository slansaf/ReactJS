import { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);
    }

    const downCount = () => {
        if (count === 0){
            return;
        }
        setCount(count - 1)
    }
    return ( 
        <>
            <Button  onClick={upCount} variant="outlined">Up +1</Button>
            <p>Значение счетчика: {count}</p>
            <Button  onClick={downCount} variant="outlined">Down -1</Button>
        </>
     );
}

export default Counter;