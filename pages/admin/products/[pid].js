import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../../../styles/admin/Products.module.css'
import SideBare from "../../../components/sidebar";
import ProviderComponent from "../../../components/ProviderComponent"
import ProductsDetailContent from "../../../components/ProductsDetailContent"


class ProductsDetail extends Component {
    state={
        prodId:undefined,
        data:{
            title:"Iphone 12",
            state:1
        },
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
                <SideBare elementActive={2}></SideBare>
                <ProviderComponent child={this.state.data==undefined?<p></p>:<ProductsDetailContent prodId = {this.state.prodId} data={this.state.data}/>} />
            </div>
        );
    }
}

export default ProductsDetail;