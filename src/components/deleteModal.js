import React from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core';
import styles from './styles';

function DeleteModal(props) {
    const { classes } = props;

    const body = (
        <div className={classes.modalContainer}>
            <h3>{"Are you sure, you want to delete the friend from list ?"}</h3>
            <Button className={classes.noButton} onClick={props.handleClose}>
                No
            </Button>
            <Button className={classes.yesButton} onClick={() => { props.handleModalSubmit() }}>
                Yes
            </Button>
        </div>
    )

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            {body}
        </Modal>
    )
}

export default withStyles(styles)(DeleteModal);
