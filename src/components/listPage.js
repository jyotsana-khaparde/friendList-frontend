import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getFriendList, updateFavorite } from '../redux/actionCreator';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.getFriendList()
    }

    handleClick = (e, friendLists) => {
        console.log('clicked...', friendLists);
        friendLists.isFavorite = !friendLists.isFavorite
        console.log('updated friendLists---', friendLists);
        this.props.updateFavorite(friendLists)
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
                            <StarBorderIcon
                                className={ friendLists.isFavorite ? classes.favorite : classes.starButton}
                                onClick={(e) => this.handleClick(e, friendLists)}
                            />
                            <DeleteOutlineOutlinedIcon
                                // onClick={(e) => this.handleTrClick(e, dataLists, 'openDeleteModal')}
                                className={classes.deleteButton}
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
        updateFavorite: (payload) => dispatch(updateFavorite(payload))
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ListPage));
