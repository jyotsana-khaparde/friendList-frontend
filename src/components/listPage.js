import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getFriendList, updateFavorite } from '../redux/actionCreator';
import Pagination from './pagination';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPerPage: 4,
            pagination: {
                start: 0,
                end: 4
            },
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

    onPaginationChange = (start, end) => {
        console.log('onPaginationChange----', start, end);
        let updatePagination = {...this.state.pagination, ['start']: start, ['end']: end}
        console.log('updatePagination---', updatePagination);
        this.setState({
            pagination: updatePagination
        })
    }

    render() {
        let { classes, friendList, searchText } = this.props;
        const { pagination, showPerPage } = this.state;
        console.log('friendList---', friendList, searchText);
        if (searchText) {
            let filteredList = friendList.filter((list) => {
                return list.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            })
            friendList = filteredList
        }
        return (
            <>
                {
                    friendList && friendList.length > 0 ?
                    friendList.slice(pagination.start, pagination.end).map((friendLists) => (
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
                    )) : <div>No Friends found !</div>
                }
                {
                    friendList && friendList.length > 0 &&
                    <Pagination
                        showPerPage={showPerPage}
                        onPaginationChange={this.onPaginationChange}
                        totalListLength={friendList.length}
                    />
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
