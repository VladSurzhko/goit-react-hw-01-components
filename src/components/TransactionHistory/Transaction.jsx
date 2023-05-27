import trans from "../TransactionHistory/transactions.json"
import "../TransactionHistory/transaction.css"

const transHistory = () => (
    <table className="transaction-history">
  <thead>
    <tr>
      <th className="top" >Type</th>
      <th className="top" >Amount</th>
      <th className="top" >Currency</th>
    </tr>
    </thead>

        <tbody>
        {trans.map((itemsy) => (
        <tr key={itemsy.id}>
      <td className="type" >{itemsy.type}</td>
      <td className="type">{itemsy.amount}</td>
      <td className="type">{itemsy.currency}</td>
        </tr>
        ))}
        </tbody>
    
        </table>
)
   export default transHistory 