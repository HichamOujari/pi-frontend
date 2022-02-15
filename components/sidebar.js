import React, { Component } from "react";
import styles from "../styles/components/SideBar.module.css";
import Link from "next/link";

class SideBare extends Component {
  render() {
    return (
      <div className={styles.menuBar}>
        <div className={styles.sidebar}>
          <img src="/logo.png" alt="" className={styles.logo} />
          <ul className={styles.content}>
            <li>
              <Link href="/admin/">
                <div className={this.props.elementActive==1?styles.sideBarElementActive:""}>
                  <i className="bi bi-house-door"></i>
                  <p>DashBoard</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/products">
                <div className={this.props.elementActive==2?styles.sideBarElementActive:""}>
                  <i className="bi bi-diagram-2"></i>
                  <p>Producs</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/services">
                <div className={this.props.elementActive==3?styles.sideBarElementActive:""}>
                  <i className="bi bi-hdd-stack"></i>
                  <p>Services</p>
                </div>
              </Link>
            </li>
            {/*
            <li>
              <Link href="/admin/tenants">
                <div className={this.props.elementActive==4?styles.sideBarElementActive:""}>
                  <i className="bi bi-activity"></i>
                  <p>Tenants</p>
                </div>
              </Link>
            </li> */}
            <li>
              <Link href="/admin/contact-us">
                <div className={this.props.elementActive==4?styles.sideBarElementActive:""}>
                  <i className="bi bi-person-rolodex"></i>
                  <p>Contact Us</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.upbar}>
            <div>
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Search"/>
              <div className={styles.iconsRight}>
                <div className={styles.notifyIcon}>
                  <i className="bi bi-bell"></i>
                </div>
                <img className={styles.profile} src="/logo.png" alt=""/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SideBare;
