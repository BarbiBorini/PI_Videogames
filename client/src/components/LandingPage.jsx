import React from "react";
import styles from "../styles/LandingStyle.module.css";
import computer from '../images/computer.jpg';
import {Link} from "react-router-dom";


export default function LandingPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.start}>PRESS START</h1>
        <Link to ="/home">
          <img className="image" src={computer} alt="PC"/>
        </Link>
    </div>
  );
}

