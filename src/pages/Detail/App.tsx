import React from 'react';
import styles from './App.module.scss';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      detail 
      <Link to="/">去首页</Link>
    </div>
  );
}

export default App;
