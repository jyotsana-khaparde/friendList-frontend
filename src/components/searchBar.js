import React, {useState, useEffect} from 'react';
import { InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {
    const { classes } = props
    const [searchedValue, setSearchedValue] = useState('')

    const handleSearchValue = (e) => {
        console.log('handleSearchValue-> ', e.target.value);
        setSearchedValue(e.target.value)
        props.handleSearchBarValue(e.target.value)
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchContainer}>
                <SearchIcon className={classes.searchIcon}/>
                <InputBase
                    placeholder="Search"
                    style={{ width: 200 }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchedValue}
                    onChange={handleSearchValue}
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(SearchBar);
