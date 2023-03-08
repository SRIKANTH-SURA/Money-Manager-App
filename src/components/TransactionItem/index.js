import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, titleInput, amountInput, typeOption} = transactionDetails
  const onClickDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li>
      <table className="history-table-row">
        <tr className="table-row">
          <td>{titleInput}</td>
          <td>Rs {amountInput}</td>
          <td>{typeOption}</td>
          <td>
            <button className="delete-btn" type="button" data-testid="delete">
              <img
                className="delete-img"
                src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                alt="delete"
                onClick={onClickDelete}
              />
            </button>
          </td>
        </tr>
      </table>
    </li>
  )
}

export default TransactionItem
