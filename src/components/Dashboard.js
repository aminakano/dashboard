import React from 'react';
import Content from "./Content";

function Dashboard() {
  const styles = {
    background: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f9fafb",
      width: "calc(100% - 240px)",
      minHeight: "100vh",
      marginLeft: "240px",
    },
    title: {
      marginLeft: "1.5rem"
    }
  };
  return (
    <div className="dashboard" style={styles.background}>
      <h2 style={styles.title}>Welcome to Dashboard</h2>
      <Content />
    </div>
  );
}

export default Dashboard
