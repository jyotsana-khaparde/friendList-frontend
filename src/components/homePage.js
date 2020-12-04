import React, {Component} from 'react';
import SearchBar from './searchBar';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           friendName: ''
        }
    }

    handleChange = (e) => {
        this.setState({ friendName: e.target.value });
     }
  
    keyPress = (e) => {
        if(e.keyCode === 13){
           console.log('value---', e.target.value);
        }
    }

    handleSearchBarValue = () => {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.header}>
                    Friends List
                </div>
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
            </div>
        )
    }
}

export default withStyles(styles)(HomePage);
