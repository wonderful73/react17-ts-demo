import React from 'react';
import styles from './index.module.scss';
import { Link } from "react-router-dom";

function Detail() {
  return (
    <div className={styles.detail}>
      detail 
      <Link to="/">TO HOME</Link>
    </div>
  );
}

export default Detail;
