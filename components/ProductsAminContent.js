import React, { Component } from 'react';
import styles from "../styles/components/ProductsAmin.module.css";
import Link from "next/link";
import TableComponent from "../components/TableComponent";

class ProductsAminContent extends Component {
    state = {
        data:[
            {"title":"product1","state":"Active","date creation":"10/02/2022","end date":"10/10/2022","rating":"4.5","consulting":this.goFor(1)},
            {"title":"product2","state":"Archived","date creation":"10/02/2022","end date":"10/10/2022","rating":"3.5","consulting":this.goFor(2)},
            {"title":"product3","state":"Archived","date creation":"10/02/2022","end date":"10/10/2022","rating":"5","consulting":this.goFor(3)},
            {"title":"product4","state":"Active","date creation":"10/02/2022","end date":"10/10/2022","rating":"2","consulting":this.goFor(4)},
            {"title":"product5","state":"Active","date creation":"10/02/2022","end date":"10/10/2022","rating":"4.5","consulting":this.goFor(5)},
            {"title":"product6","state":"Archived","date creation":"10/02/2022","end date":"10/10/2022","rating":"3.5","consulting":this.goFor(6)},
            {"title":"product7","state":"Archived","date creation":"10/02/2022","end date":"10/10/2022","rating":"5","consulting":this.goFor(7)},
            {"title":"product8","state":"Active","date creation":"10/02/2022","end date":"10/10/2022","rating":"2","consulting":this.goFor(8)},
            {"title":"product9","state":"Active","date creation":"10/02/2022","end date":"10/10/2022","rating":"4.5","consulting":this.goFor(9)},
            {"title":"product10","state":"Archived","date creation":"10/02/2022","end date":"10/10/2022","rating":"3.5","consulting":this.goFor(10)},
            {"title":"product11","state":"Archived","date creation":"10/02/2022","end date":"10/10/2022","rating":"5","consulting":this.goFor(11)},
            {"title":"product12","state":"Active","date creation":"10/02/2022","end date":"10/10/2022","rating":"2","consulting":this.goFor(12)},
        ],
        columns: ["title","state","date creation","end date","rating","consulting"],
        pages:[],
        currentPage:0,
        dataSend : []
    }

    goFor(id){
        return <Link href={"products/"+id}><i className="icons bi bi-arrow-right"></i></Link>
    }

    setPage(op){
        if(op==1) this.setState({currentPage: this.state.currentPage+1,dataSend: this.state.data.slice(this.state.currentPage*10+10,this.state.currentPage*10+20)})
        else this.setState({currentPage: this.state.currentPage-1,dataSend: this.state.data.slice(this.state.currentPage*10-10,this.state.currentPage*10)})
    }
    componentDidMount(){
        this.setState({
            dataSend: this.state.data.slice(this.state.currentPage*10,this.state.currentPage*10+10)
        })
        var tmp = []
        for(var i=0;i<this.state.data.length/10;i++){
            tmp=[...tmp,i]
        }
        this.setState({pages:tmp});
    }

    setSearch(textSearched){
        let tmp = [];
        this.state.data.map(ele=>{
            if(ele["title"].includes(textSearched)) tmp = [...tmp,ele]
        })
        this.setState({dataSend: tmp})
    }

    render() {
        return (
            <div className={styles.ProductsAmin}>
                <p className={styles.title}>Products</p>
                <div className={styles.contentTable}>
                    <div className={styles.headerBtn}>
                        <Link href="products/new"><div className={styles.right}>+ Add New Product</div></Link>
                        <div className={styles.left}>
                            <i className="bi bi-search"></i>
                            <input onChange={(e)=>this.setSearch(e.target.value)} type="text" placeholder="Filter product" />
                        </div>
                    </div>
                    <TableComponent data={this.state.dataSend} columns={this.state.columns} />
                    <div className={styles.pagination}>
                        <ul>
                            <li onClick={()=>this.setPage(-1)} className={this.state.currentPage==0?styles.display_none:styles.display_}>Previous</li>
                            {this.state.pages.map((ele,index)=>{
                                return <li key={index}>{ele+1}</li>
                            })}
                            <li onClick={()=>this.setPage(1)} className={this.state.currentPage==parseInt(this.state.data.length/10)?styles.display_none:styles.display_}>Next</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsAminContent;