import React, { Component } from 'react';
import styles from "../styles/components/DashboradCard.module.css"
import Link from "next/link";

class DashboardCard extends Component {
    render() {
        return (
            <div className={styles.DashboardCard}>
                <div className={styles.upSide}>
                    <div className={styles.iconSide}>
                        <i className={this.props.data.icon}></i>
                    </div>
                    <div className={styles.rightSide}>
                        <p className={styles.title}>{this.props.data.title}</p>
                        <p className={styles.val}>{this.props.data.val} <sub className={"green"==this.props.data.color?styles.cgreen:styles.cred}>{this.props.data.unit}</sub></p>
                    </div>
                </div>
                <div className={styles.bottomSide}>
                    <Link href={this.props.data.path} ><p>View All</p></Link>
                </div>
            </div>
        );
    }
}

export default DashboardCard;