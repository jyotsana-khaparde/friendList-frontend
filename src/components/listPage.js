import React, {Component} from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           friendName: ''
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>

            </div>
        )
    }
}

export default withStyles(styles)(ListPage);
