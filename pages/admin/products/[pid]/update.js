import React, { Component } from 'react';
import Head from 'next/head'
import styles from "../../../../styles/components/pageUpdateProduct.module.css"
import NewProductComponent from "../../../../components/NewProductComponent"
import SideBare from "../../../../components/sidebar"
import ProviderComponent from "../../../../components/ProviderComponent"

class ProductsDetail extends Component {
    state={
        idProd : 1,
        desc : "This is a new product listed in the update's Pages",
        title:""
    }
    componentDidMount(){
        this.setState({prodId:document.location.href.split("/admin/products/")[1].split("/")[0]})
    }
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Product Detail</title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/logo.png" />
                </Head>
                <SideBare elementActive = {1}></SideBare>
                <ProviderComponent child = {<NewProductComponent data={this.state} />} />      
            </div>
        );
    }
}

export default ProductsDetail;