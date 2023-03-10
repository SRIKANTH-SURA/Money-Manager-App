import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    typeOption: 'INCOME',
    moneyDetails: {
      totalIncome: 0,
      totalExpenses: 0,
      totalBalance: 0,
    },
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const deletedTransaction = transactionList.find(
      eachTransaction => eachTransaction.id === id,
    )
    if (deletedTransaction.typeOption === 'INCOME') {
      this.setState(prevState => ({
        moneyDetails: {
          totalIncome:
            prevState.moneyDetails.totalIncome - deletedTransaction.amountInput,
          totalBalance:
            prevState.moneyDetails.totalBalance -
            deletedTransaction.amountInput,
          totalExpenses: prevState.moneyDetails.totalExpenses,
        },
      }))
    } else {
      this.setState(prevState => ({
        moneyDetails: {
          totalIncome: prevState.moneyDetails.totalIncome,
          totalBalance:
            prevState.moneyDetails.totalBalance +
            deletedTransaction.amountInput,
          totalExpenses:
            prevState.moneyDetails.totalExpenses -
            deletedTransaction.amountInput,
        },
      }))
    }
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  onAddTransaction = () => {
    const {titleInput, amountInput, typeOption, moneyDetails} = this.state
    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      typeOption,
    }

    let balance = moneyDetails.totalBalance
    let income = moneyDetails.totalIncome
    let expenses = moneyDetails.totalExpenses

    if (typeOption === 'INCOME') {
      income += amountInput
    } else {
      expenses += amountInput
    }
    balance = income - expenses

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeOption: 'INCOME',
      moneyDetails: {
        totalIncome: income,
        totalExpenses: expenses,
        totalBalance: balance,
      },
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: parseInt(event.target.value)})
  }

  onChangeTypeInput = event => {
    this.setState({typeOption: event.target.value})
  }

  render() {
    const {
      transactionList,
      titleInput,
      amountInput,
      typeOption,
      moneyDetails,
    } = this.state

    return (
      <div className="money-manager-app">
        <div className="app-content">
          <div className="header">
            <h1 className="heading">Hi, Srikanth</h1>
            <p className="Description">
              Welcome back to your{' '}
              <span className="app-text">Money Manager</span>
            </p>
          </div>

          <MoneyDetails moneyDetails={moneyDetails} />

          <div className="transaction-details-container">
            <div className="add-transaction-form-container">
              <form className="transaction-form">
                <h1 className="add-transaction-heading">Add Transaction</h1>
                <div className="form-field">
                  <label className="label-text" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    id="title"
                    className="user-input"
                    type="text"
                    value={titleInput}
                    placeholder="TITLE"
                    onChange={this.onChangeTitleInput}
                  />
                </div>
                <div className="form-field">
                  <label className="label-text" htmlFor="amount">
                    AMOUNT
                  </label>
                  <input
                    id="amount"
                    className="user-input"
                    type="number"
                    value={amountInput}
                    placeholder="AMOUNT"
                    onChange={this.onChangeAmountInput}
                  />
                </div>
                <div className="form-field">
                  <p className="label-text">TYPE</p>
                  <select
                    className="user-input"
                    value={typeOption}
                    onChange={this.onChangeTypeInput}
                  >
                    {transactionTypeOptions.map(eachOption => (
                      <option
                        value={eachOption.optionId}
                        key={eachOption.optionId}
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <button
                    className="add-btn"
                    type="button"
                    onClick={this.onAddTransaction}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="transaction-history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-table-heading">
                <div className="table-row">
                  <p className="table-heading">Title</p>
                  <p className="table-heading">Amount</p>
                  <p className="table-heading">Type</p>
                  <p> </p>
                </div>
                <ul className="transaction-list">
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      transactionDetails={eachTransaction}
                      key={eachTransaction.id}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
