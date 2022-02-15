import React, { Component } from 'react';
import styles from "../styles/components/NewProductComponent.module.css";
import Link from "next/link";

class NewProductComponent extends Component {
    state = {
        title:"",
        desc:"",
        categorie:"",
        by:""
    }
    render() {
        return (
            <div className={styles.NewProductComponent}>
                <p className={styles.title}>{this.props.data==undefined ? "Create new product :" : "Update product's page:"}</p>
                <form className={styles.formProduct}>
                    <input type="text" placeholder="Title" onChange={(e)=>this.setState({title:e.target.value})}/>
                    <input type="text" placeholder="Made by ..." onChange={(e)=>this.setState({by:e.target.value})}/>
                    <select onChange={(e)=>{this.setState({categorie:e.target.value})}}>
                        <option value="1">Vehicule</option>
                        <option value="2">Informatique</option>
                        <option value="3">Phone</option>
                        <option value="4">Maison</option>
                    </select>
                    <textarea onChange={(e)=>{this.setState({desc:e.target.value})}} placeholder="Description"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewProductComponent;