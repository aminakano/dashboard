import React from 'react'
import logo from "../assets/icon.png";

function Sidebar() {
  const styles = {
    sidebar: {
      width: "240px",
      height: "100%",
      position: "fixed",
      left: 0,
      top: 0,
    },
    body: {
      boxShadow: "0 8px 10px 0 rgba(183, 192, 206, 0.2)",
      height: "100%",
    },
  };
  return (
    <nav style={styles.sidebar}>
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="Chart with arrow"/>
        <h2>Dashboard</h2>
      </div>
      <div className="sidebar-body" style={styles.body}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
