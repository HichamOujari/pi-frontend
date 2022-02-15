import React, { Component } from "react";
import Head from 'next/head'
import styles from '../../styles/admin/Services.module.css'
import SideBare from "../../components/sidebar";
import ProviderComponent from "../../components/ProviderComponent"


class Services extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Dashboard Admin</title>
          <meta name="description" content="" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <SideBare elementActive={3}></SideBare>
        <ProviderComponent child={<p>Services</p>} />
      </div>
    );
  }
}

export default Services;
