import './index.css'
import {Component} from 'react'

class MoneyDetails extends Component {
  render() {
    const {moneyDetails} = this.props
    const {totalBalance, totalIncome, totalExpenses} = moneyDetails

    return (
      <div className="money-details-container">
        <div className="card balance-card">
          <div className="card-img-container">
            <img
              className="card-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div className="card-text-container">
            <p className="card-title">Your Balance</p>
            <h1 className="card-value">Rs {totalBalance}</h1>
          </div>
        </div>
        <div className="card income-card">
          <div className="card-img-container">
            <img
              className="card-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div className="card-text-container">
            <p className="card-title">Your Income</p>
            <h1 className="card-value">Rs {totalIncome}</h1>
          </div>
        </div>
        <div className="card expenses-card">
          <div className="card-img-container">
            <img
              className="card-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div className="card-text-container">
            <p className="card-title">Your Expenses</p>
            <h1 className="card-value">Rs {totalExpenses}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
