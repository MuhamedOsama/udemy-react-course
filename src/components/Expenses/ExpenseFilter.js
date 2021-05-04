import React from "react";
import Card from "../UI/Card";
import ExpenseChartItem from "./ExpenseChartItem";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const filterYearChangeHandler = (e) => {
    props.onYearChange(e.target.value);
  };
  return (
    <div>
      <div className="row">
        <span>Filter by Year</span>
        <select
          className="select"
          name="years"
          onChange={filterYearChangeHandler}
        >
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div className="row">
        <div className="expenseChart">
          <ExpenseChartItem chartData={} />
        </div>
      </div>
    </div>
  );
};
export default ExpenseFilter;
