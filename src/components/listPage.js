import React, {Component} from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
            <div className={classes.listContainer}>
                <div className={classes.nameContainer}>
                    <span className={classes.name}>Jyotsana Khaparde</span>
                    <span className={classes.info}>is your friend</span>
                </div>
                <div>
                    <DeleteOutlineOutlinedIcon
                        // onClick={(e) => this.handleTrClick(e, dataLists, 'openDeleteModal')}
                        className={classes.deleteButton}
                    />
                    <StarBorderIcon
                        className={classes.starButton}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ListPage);
