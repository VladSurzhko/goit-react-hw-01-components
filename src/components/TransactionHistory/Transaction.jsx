import PropTypes from 'prop-types';
import trans from "../TransactionHistory/transactions.json"
import trcss from "../TransactionHistory/transaction.module.css"

const transHistory = () => (
    <table className={trcss.transactionhistory}>
  <thead>
    <tr>
      <th className={trcss.top} >Type</th>
      <th className={trcss.top} >Amount</th>
      <th className={trcss.top} >Currency</th>
    </tr>
  </thead>

  <tbody>
      {trans.map((itemsy) => (
      <tr key={itemsy.id}>
      <td className={trcss.type} >{itemsy.type}</td>
      <td className={trcss.type}>{itemsy.amount}</td>
      <td className={trcss.type}>{itemsy.currency}</td>
    </tr>
      ))}
  </tbody>
        
    </table>
)
   export default transHistory 

   transHistory.propTypes = {
    id:PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string,
  }