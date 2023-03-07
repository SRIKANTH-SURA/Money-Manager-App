import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, titleInput, amountInput, typeOption} = transactionDetails
  const onClickDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <tr className="table-row">
      <td>{titleInput}</td>
      <td>Rs {amountInput}</td>
      <td>{typeOption}</td>
      <td>
        <button className="delete-btn" type="button">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            onClick={onClickDelete}
          />
        </button>
      </td>
    </tr>
  )
}

export default TransactionItem
