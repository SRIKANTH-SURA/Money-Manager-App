import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, titleInput, amountInput, typeOptionInput} = transactionDetails
  const onClickDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p>{titleInput}</p>
      <p>Rs {amountInput}</p>
      <p>{typeOptionInput}</p>
      <p>
        <button className="delete-btn" type="button" data-testid="delete">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            onClick={onClickDelete}
          />
        </button>
      </p>
    </li>
  )
}

export default TransactionItem
