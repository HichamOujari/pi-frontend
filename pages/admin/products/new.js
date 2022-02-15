import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../../../styles/admin/Products.module.css'
import SideBare from "../../../components/sidebar";
import ProviderComponent from "../../../components/ProviderComponent"
import NewProductComponent from "../../../components/NewProductComponent"


class NewProducts extends Component {
    
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Product Detail</title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/logo.png" />
                </Head>
                <SideBare elementActive={2}></SideBare>
                <ProviderComponent child={<NewProductComponent/>} />
            </div>
        );
    }
}

export default NewProducts;