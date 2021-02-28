import React from "react";

const style = {
  marginBottom: "40px",
  width: "60%",
  searchForm: {
    padding: "10px",
  }
}

function Search(props){
  return(
    <>
      <div className="container text-center" style={style}>
      <input type="search" name="contains" style={style.searchForm} value={props.value} onChange={props.handleInputChange} placeholder="Search" />
      </div>
    </>
  )
}

export default Search;