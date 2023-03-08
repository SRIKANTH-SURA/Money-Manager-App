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
            <p className="card-value" data-testid="balanceAmount">
              Rs {totalBalance}
            </p>
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
            <p className="card-value" data-testid="incomeAmount">
              Rs {totalIncome}
            </p>
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
            <p className="card-value" data-testid="expensesAmount">
              Rs {totalExpenses}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
