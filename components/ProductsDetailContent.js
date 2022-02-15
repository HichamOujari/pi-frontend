import React, { Component } from 'react';
import styles from "../styles/components/ProductsDetailContent.module.css";
import Link from "next/link";
import TableComponent from "../components/TableComponent";

class ProductsDetailContent extends Component {
    state = {
        data:[
            {"fullname":"John Doe","rating":"4","detail":"Thank you for your affirmation, we will definitely work hard to do bette"},
            {"fullname":"Kamal Ahmed","rating":"5","detail":"It was what I expected for the price, arrived 1 week before the scheduled date. All good "},
            {"fullname":"Youssed","rating":"3","detail":"Your suggestion is also very good, our products match you very well"},
            {"fullname":"Allamou","rating":"4","detail":"Works great recommended "},
            {"fullname":"Ayoub","rating":"2.5","detail":"The product is excellent and meets the promised! I am very satisfied!! "},
            {"fullname":"Oujari","rating":"1.5","detail":"Product arrived quickly in Brasil very cute and stylish best grade recommend to everyone"},
            {"fullname":"user19","rating":"5","detail":"Sent quickly, came in 25 days to Belarus. I 've been tracking in places. Full set. Only the mount on the protective cap is broken (in the photo under the arrows), but it does not affect the work. You can also store in the nozzle. Charge-80%,"},
            {"fullname":"iliass","rating":"5","detail":"máquina top,desing show, lâmina parece ser de excelente qualidade recomendo a todos envio super rápido obrigado"},
            {"fullname":"product9","rating":"5","detail":"Ótimomo product. Robust and well done! Sharp and very silent also. Arrived in perfect condition, as well as ad! Not like the combined delivery system, the chance of being branded increases too the size that is the package depending on quantity of products you purchase! Otherwise, all beauty."},
            {"fullname":"Marouan","rating":"5","detail":"Good quality goods. Received quite in an acceptable time. Packed qualitatively, during transportation of damage to the packaging material did not pass. The seller is satisfied, I advise this store. If necessary, I will order again. I hope for a long service of goods, but time will show... "},
            {"fullname":"user29","rating":"4","detail":"Very beautiful and solid arrived very quickly I tried it and it works very well very precise I am satisfied with my purchase thank you "},
            {"fullname":"user11","rating":"5","detail":"Muito bom o produto. Chegou rápido e funciona perfeitamente!"},
            {"fullname":"anonyme","rating":"5","detail":"Top, very good, arrived before time, not taxed. Recommend, will buy more"},
            {"fullname":"user100","rating":"4","detail":"Wow!!!Brief summary The product came quickly in 40 days to Moscow. The box is not noticed, the machine is running, the battery was charged. Hair nozzles from thin palassmas. The product bought for 0,74 rubles. That's halava!"},
        ],
        columns: ["fullname","rating","detail"],
        pages:[],
        currentPage:0,
        dataSend : [],
        state :this.props.data.state
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
            if(ele["fullname"].includes(textSearched)) tmp = [...tmp,ele]
        })
        this.setState({dataSend: tmp})
    }
    render() {
        return (
            <div className={styles.ProductsDetailContent}>
                <p className={styles.title}>Product : {this.props.data.title}</p>
                <div className={styles.contentTable}>
                    <div className={styles.headerBtn}>
                        <div className={styles.right}>
                                {/*this.props.data.state==0?<Link href={this.props.prodId+"/active"}><div className={styles.active}>Active</div></Link>:<Link href={this.props.prodId+"/archive"}><div className={styles.archive}>Archive</div></Link>*/}
                                {this.state.state==0?<div onClick={() => this.setState({state:1})} className={styles.active}>Active</div>:<div onClick={() => this.setState({state:0})} className={styles.archive}>Archive</div>}
                                <Link href={this.props.prodId+"/update"}><div className={styles.update}>Update</div></Link>
                                
                            </div>
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

export default ProductsDetailContent;