import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';


const Pagination = (props) => {
    console.log('props showPerPage----', props)
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('counter----', counter);
        const value = props.showPerPage * counter;
        console.log('start value:-', value - props.showPerPage);
        console.log('end value:-', value);
        // start value and end value 
        props.onPaginationChange( value - props.showPerPage, value)
    }, [counter]);

    const handleButtonClick = (type) => {
        if (type === 'prev') {
            counter === 1 ? setCounter(1) : setCounter(counter - 1)
        }
        if (type === 'next') {
            (Math.ceil(props.totalListLength / props.showPerPage) === counter) ? setCounter(counter) : setCounter(counter + 1)
        }
    }

    return (
        <div>
            <Button onClick={() => handleButtonClick('prev')}>
                Previous
            </Button>
            <Button onClick={() => handleButtonClick('next')}>
                Next
            </Button>
        </div>
    )
}

export default Pagination;
