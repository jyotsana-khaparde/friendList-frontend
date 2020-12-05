import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getFriendList } from '../redux/actionCreator';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           friendName: ''
        }
    }

    componentDidMount() {
        this.props.getFriendList()
    }

    render() {
        const { classes, friendList } = this.props;
        console.log('friendList---', friendList);
        return (
            <>
                {
                    friendList.map((friendLists) => (
                    <div className={classes.listContainer} key={friendLists.id}>
                        <div className={classes.nameContainer}>
                            <span className={classes.name}>{friendLists.name}</span>
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
                    ))
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps ListPage---->', state);
    return {
        friendList: state.friendList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFriendList: () => dispatch(getFriendList()),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ListPage));
