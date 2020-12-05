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
            friendLists.isFavorite = !friendLists.isFavorite
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
        let updatePagination = {...this.state.pagination, ['start']: start, ['end']: end}
        this.setState({
            pagination: updatePagination
        })
    }

    sortDataList = (dataList) => {
        // sort by name
        dataList.sort(function(a, b) {
            // ignore upper and lowercase
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            return 0;
        });
        return dataList;
    }

    render() {
        let { classes, friendList, searchText } = this.props;
        const { pagination, showPerPage, openDeleteModal, friendListData } = this.state;
        let updatedFilter = [];
        let unfavoriteArray = [];
        let favoriteArray = [];
        let showMesssage = false;
        if (searchText) {
            updatedFilter = friendList.filter((list) => {
                return list.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            })
            updatedFilter.length > 0 ? showMesssage = false : showMesssage = true;
        }
        if (!searchText) {
            unfavoriteArray = friendList.filter(friendLists => friendLists.isFavorite === false);
            unfavoriteArray = this.sortDataList(unfavoriteArray);
            
            favoriteArray = friendList.filter(friendLists => friendLists.isFavorite === true);
            favoriteArray = this.sortDataList(favoriteArray);
            
            friendList = [...favoriteArray, ...unfavoriteArray];
            updatedFilter = friendList.length > 4 ? friendList.slice(pagination.start, pagination.end) : friendList
        }

        return (
            <>
                {
                    updatedFilter.map((friendLists) => (
                    <div className={classes.listContainer} key={friendLists.id}>
                        <div className={classes.nameContainer}>
                            <span className={classes.name}>{friendLists.name}</span>
                            <span className={classes.info}>is your friend</span>
                        </div>
                        <div className={classes.iconContainer}>
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
                )) 
                }
                { showMesssage && <div>No Friends found !</div>}
                {
                    friendList.length > 4 && !searchText &&
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
                        friendName={friendListData.name}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = state => {
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
