import trans from "../TransactionHistory/transactions.json"
import Trcss from "../TransactionHistory/transaction.module.css"

const transHistory = () => (
    <table className={Trcss.transactionhistory}>
  <thead>
    <tr>
      <th className={Trcss.top} >Type</th>
      <th className={Trcss.top} >Amount</th>
      <th className={Trcss.top} >Currency</th>
    </tr>
  </thead>

  <tbody>
        {trans.map((itemsy) => (
     <tr key={itemsy.id}>
      <td className={Trcss.type} >{itemsy.type}</td>
      <td className={Trcss.type}>{itemsy.amount}</td>
      <td className={Trcss.type}>{itemsy.currency}</td>
    </tr>
        ))}
  </tbody>
        
      </table>
)
   export default transHistory 