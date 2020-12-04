import React from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const Header = (props) => {
    const { classes } = props;

    return (
        <div className={classes.header}>
            Friends List
        </div>
    )
}

export default withStyles(styles)(Header);
