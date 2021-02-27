import React from 'react';

const style = {
  "padding": "25px",
  "backgroundColor": "##0d004d",
  "color": "white",
  "textAlign": "center",
  divider: {
    "backgroundColor": "#ff0000",
    "height": "4px",
  }
}

function Header() {
  return (
    <>
    <div style={style}>
      <h1>People Directory</h1>
      <p>Click on a header on the table to filter by heading or use the search box to narrow your results.</p>
    </div>
    <div className="divider" style={style.divider}></div>
    </>
  )
}

export default Header;