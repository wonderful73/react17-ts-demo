import React from 'react';
import styles from './App.module.scss';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      mall
      <Link to="/detail">去商品详情</Link>
    </div>
  );
}

export default App;
