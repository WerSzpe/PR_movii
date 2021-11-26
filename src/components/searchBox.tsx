import React from 'react';

const SearchBox = (props:any) => {
    return(
        <div className="search-box">
            <input type="text" placeholder="wpisz nazwę filmu..." className="searchbox"/>
        </div>
    );
}

export default SearchBox;