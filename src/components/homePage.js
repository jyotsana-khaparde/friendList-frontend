import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchBar';
import { withStyles } from '@material-ui/core';
import ListPage from './listPage';
import Header from './header';
import styles from './styles';
import { addFriend } from '../redux/actionCreator';
const uuid = require('uuid');

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           friendName: '',
           searchedText: '',
        }
    }

    handleChange = (e) => {
        this.setState({ friendName: e.target.value });
     }
  
    keyPress = (e) => {
        if (e.keyCode === 13) {
            let payload = {
                id: uuid.v4(),
                name: e.target.value,
                isFavorite: false
            }
            this.props.addFriend(payload)
            this.setState({ friendName: '' });
        }
    }

    handleSearchBarValue = (value) => {
        this.setState({ searchedText: value })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Header/>
                    <div className={classes.headingContainer}>
                        <input
                            placeholder="Enter your friend's name"
                            className={classes.input} 
                            value={this.state.friendName} 
                            onKeyDown={this.keyPress} 
                            onChange={this.handleChange} 
                        />
                        <SearchBar
                            handleSearchBarValue={this.handleSearchBarValue}
                        />
                    </div>
                    <ListPage
                        searchText={this.state.searchedText}
                    />
            </div>
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
        addFriend: (payload) => dispatch(addFriend(payload)),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HomePage));
