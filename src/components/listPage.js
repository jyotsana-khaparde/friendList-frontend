import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getFriendList, updateFavorite, deleteFriend } from '../redux/actionCreator';
import Pagination from './pagination';
import DeleteModal from './deleteModal';

class ListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDeleteModal: false,
            showPerPage: 4,
            friendListData: {},
            pagination: {
                start: 0,
                end: 4
            },
        }
    }

    componentDidMount() {
        this.props.getFriendList()
    }

    handleClick = (e, friendLists, key) => {
        if (key === 'star') {
            console.log('clicked...', friendLists);
            friendLists.isFavorite = !friendLists.isFavorite
            console.log('updated friendLists---', friendLists);
            this.props.updateFavorite(friendLists)
        }
        if (key === 'delete') {
            this.setState({ 
                friendListData: friendLists, 
                openDeleteModal: true 
            })
        }
    }

    handleDeleteSubmit = () => {
        this.props.deleteFriend(this.state.friendListData.id)
        this.setState({ 
            openDeleteModal: false 
        })
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
        const { pagination, showPerPage, openDeleteModal } = this.state;
        let updatedFilter = []
        if (searchText) {
            updatedFilter = friendList.filter((list) => {
                return list.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            })
        }
        if (!searchText) {
            console.log('pagination bas dikhana hai')
            updatedFilter = friendList.slice(pagination.start, pagination.end)
        }
        console.log('updatedFilter--->>>>>>', updatedFilter);

        return (
            <>
                {
                    updatedFilter && updatedFilter.length > 0 ?
                    updatedFilter.map((friendLists) => (
                    <div className={classes.listContainer} key={friendLists.id}>
                        <div className={classes.nameContainer}>
                            <span className={classes.name}>{friendLists.name}</span>
                            <span className={classes.info}>is your friend</span>
                        </div>
                        <div>
                            <StarBorderIcon
                                className={ friendLists.isFavorite ? classes.favorite : classes.starButton}
                                onClick={(e) => this.handleClick(e, friendLists, 'star')}
                            />
                            <DeleteOutlineOutlinedIcon
                                onClick={(e) => this.handleClick(e, friendLists, 'delete')}
                                className={classes.deleteButton}
                            />
                        </div>
                    </div>
                    )) : <div>No Friends found !</div>
                }
                {
                    friendList && friendList.length > 0 && !searchText &&
                    <Pagination
                        showPerPage={showPerPage}
                        onPaginationChange={this.onPaginationChange}
                        totalListLength={friendList.length}
                    />
                }
                {
                    this.state.openDeleteModal && <DeleteModal
                        open={openDeleteModal}
                        handleClose={() => this.setState({ openDeleteModal: false })}
                        handleModalSubmit={this.handleDeleteSubmit}
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
        updateFavorite: (payload) => dispatch(updateFavorite(payload)),
        deleteFriend: (payload) => dispatch(deleteFriend(payload))
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ListPage));
