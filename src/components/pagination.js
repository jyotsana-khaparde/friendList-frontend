import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const Pagination = (props) => {
    console.log('props showPerPage----', props)
    const { classes } = props;
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
        <>
            <ul className={classes.paginationContainer}>
                <li>
                    <Button color='primary' onClick={() => handleButtonClick('prev')}>
                        Previous
                    </Button>
                </li>
                {
                    new Array(Math.ceil(props.totalListLength / props.showPerPage)).fill("").map((element, index) => (
                        <li
                            className={index + 1 === counter ? classes.activePageNumber : classes.pageNumber}
                            onClick={() => setCounter(index + 1)}
                        >
                            <span>
                                {index + 1}
                            </span>
                        </li>
                    ))
                }
                <li>
                    <Button color='primary' onClick={() => handleButtonClick('next')}>
                        Next
                    </Button>
                </li>
            </ul>
        </>
    )
}

export default withStyles(styles)(Pagination);
