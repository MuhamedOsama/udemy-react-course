import React from 'react';

import './ExpenseChartItem.css';
const ExpenseFilter = (props) => {
  return (
    // {props.chartData.map((chartItem, index) => (
    //   <ExpenseItem expense={expense} key={index}></ExpenseItem>
    // ))}
    <div className='row'>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>jan</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Feb</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Mar</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Apr</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>May</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Jun</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Jul</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Aug</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Sep</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Oct</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Nov</span>
      </div>
      <div className='chartItemWrapper'>
        <div className='chartItem'>
          <div className='chartFill' style={{ height: '100%' }}></div>
        </div>
        <span className='month'>Dec</span>
      </div>
    </div>
  );
};
export default ExpenseFilter;
