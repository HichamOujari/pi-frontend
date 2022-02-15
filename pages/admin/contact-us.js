import React, { Component } from "react";
import Head from "next/head";
import styles from "../../styles/admin/ContactUs.module.css";
import SideBare from "../../components/sidebar";
import ProviderComponent from "../../components/ProviderComponent";
import Link from "next/Link";

class ContactUs extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Dashboard Admin</title>
          <meta name="description" content="" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <SideBare elementActive={4}></SideBare>
        <ProviderComponent child={<p></p>} />
      </div>
    );
  }
}

export default ContactUs;
