import React, { Component } from "react";
import styles from "../styles/admin/Home.module.css";
import DashboardCard from "./DashboardCard";
import Chart from "chart.js";
import { Bar } from "react-chartjs-2";

class AdminContent extends Component {
  listCard = [
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Total Review",
      val: "7000",
      unit: "Review",
      seeMore: "",
      path: "/reviews/all",
      color: "green",
    },
    {
      icon: "bi bi-hand-thumbs-up-fill",
      title: "Total Positive Review",
      val: "5800",
      unit: "Review",
      seeMore: "",
      path: "/reviews/poditive",
      color: "green",
    },
    {
      icon: "bi bi-hand-thumbs-down-fill",
      title: "Total Negative Review",
      val: "900",
      unit: "Review",
      path: "/reviews/negtive",
      seeMore: "",
      color: "red",
    },
    {
      icon: "bi bi-diagram-3-fill",
      title: "Total Products",
      val: "16",
      unit: "",
      path: "/products",
      seeMore: "",
      color: "green",
    },
    {
      icon: "bi bi-activity",
      title: "Active Products",
      val: "12",
      unit: "",
      path: "/products/actives",
      seeMore: "",
      color: "green",
    },
    {
      icon: "bi bi-archive-fill",
      title: "Archived Products",
      val: "20",
      unit: "",
      seeMore: "",
      path: "/products/archived",
      color: "green",
    },
  ];

  state={
    chartData:{
        labels: ['[18 - 25]', '[26 - 45]', '+45'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of buyer',
              data: [20,10,5,0,40],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'blue',
                'green',
                'yellow'
              ],
              borderWidth: 1,
            }
        ]
}
  }

  render() {
    return (
      <div className={styles.AdminContent}>
        <p className={styles.title}>Dashboard</p>
        <p className={styles.statistiqueOf}>Last 30 Days</p>
        <ul className={styles.listConponents}>
          {this.listCard.map((ele, index) => (
            <li key={index}>
              {" "}
              <DashboardCard data={ele} />
            </li>
          ))}
        </ul>
        <div className={styles.graphe} >
           <Bar
            data={this.state.chartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default AdminContent;
