import './index.css'

const MoneyDetails = () => (
  <ul className="list-container">
    <li className="list-item ">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="money-details-img"
      />
      <div className="money-detail-container">
        <p className="money-detail-text">Your Balance</p>
        <p className="money-detail">Rs 40000</p>
      </div>
    </li>
    <li className="list-item blue-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="money-details-img"
      />
      <div className="money-detail-container">
        <p className="money-detail-text">Your Income</p>
        <p className="money-detail">Rs 40000</p>
      </div>
    </li>
    <li className="list-item violet-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="money-details-img"
      />
      <div className="money-detail-container">
        <p className="money-detail-text">Your Expenses</p>
        <p className="money-detail">Rs 40000</p>
      </div>
    </li>
  </ul>
)

export default MoneyDetails
