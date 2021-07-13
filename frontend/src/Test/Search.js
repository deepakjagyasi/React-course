import React from 'react'



function Search(props) {
    return (
      <input data-testid="filterInput" onChange="props.handleCallback" className="large" placeholder="Enter Country Name"/>
  	);
}

export default Search;
