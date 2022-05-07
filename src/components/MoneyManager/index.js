import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails/index'

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
    titleInput: '',
    amountInput: '',
    incomeType: 'Income',
    historyList: [],
  }

  updateTitleState = event => {
    this.setState({titleInput: event.target.value})
  }

  updateAmountState = event => {
    this.setState({amountInput: event.target.value})
  }

  updateIncomeTypeState = event => {
    this.setState({incomeType: event.target.value})
  }

  onAddingDetails = event => {
    event.preventDefault()
    const {titleInput, amountInput, incomeType, historyList} = this.state
    const newHistoryListItem = {
      title: titleInput,
      amount: amountInput,
      incomeType,
    }

    this.setState({
      historyList: [...historyList, newHistoryListItem],
      titleInput: '',
      amountInput: '',
      incomeType: 'Income',
    })
  }

  render() {
    const {titleInput, amountInput, incomeType, historyList} = this.state
    console.log(historyList)
    return (
      <div className="bg-container">
        <div className="header-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="span-element">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <form className="form-container" onSubmit={this.onAddingDetails}>
          <p className="add-transaction-text">Add transaction</p>
          <div className="input-container">
            <label htmlFor="title" className="label-element">
              TITLE
            </label>
            <input
              id="title"
              placeholder="TITLE"
              className="input-element"
              onChange={this.updateTitleState}
            />
          </div>
          <div className="input-container">
            <label htmlFor="amount" className="label-element">
              AMOUNT
            </label>
            <input
              id="amount"
              placeholder="AMOUNT"
              className="input-element"
              onChange={this.updateAmountState}
            />
          </div>
          <div className="input-container">
            <label htmlFor="income-type" className="label-element">
              TYPE
            </label>
            <select
              id="income-type"
              placeholder="AMOUNT"
              className="input-element"
              onChange={this.updateIncomeTypeState}
            >
              {transactionTypeOptions.map(eachType => (
                <option key={eachType.optionId}>{eachType.displayText}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
        <div className="history-container">
          <p className="history-text">History</p>
          <ul className="history-list-container">
            <li className="history-list-header-item">
              <p className="history-header-text">Title</p>
              <p className="history-header-text">Amount</p>
              <p className="history-header-text">Type</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
