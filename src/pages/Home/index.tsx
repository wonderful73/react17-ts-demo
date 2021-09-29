import React from 'react';
import styles from './index.module.scss';
import { Link } from "react-router-dom";

const home: React.FC<{}> = () => {
  return (
    <div className={styles.home}>
      home
      <Link to="/detail">TO DETAIL</Link>
    </div>
  );
}

export default home;
