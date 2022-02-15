import React, { Component } from "react";
import Head from 'next/head'
import styles from '../../styles/admin/Products.module.css'
import SideBare from "../../components/sidebar";
import ProviderComponent from "../../components/ProviderComponent"
import ProductsAminContent from "../../components/ProductsAminContent"

class Products extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Products</title>
          <meta name="description" content="" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <SideBare elementActive={2}></SideBare>
        <ProviderComponent child={<ProductsAminContent />} />
      </div>
    );
  }
}

export default Products;
