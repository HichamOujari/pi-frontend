import React, { Component } from 'react';
import styles from "../styles/components/TableComponent.module.css"

class TableComponent extends Component {

    render() {
        return (
            <table className={styles.TableComponent}>
                <thead>
                    <tr>
                        {this.props.columns.map((ele,index)=>{
                            return (<th key={index}>{ele}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                        {this.props.data.map((ele,index)=>{
                            return <tr key={index}>
                                {
                                    this.props.columns.map((sousele,jindex)=>{
                                        return (<td key={jindex}>{ele[sousele]}</td>)
                                    })
                                }
                            </tr>
                        })}
                </tbody>
                <tfoot></tfoot>
            </table>
        );
    }
}

export default TableComponent;