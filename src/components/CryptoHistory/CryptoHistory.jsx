import style from './CryptoHistory.module.css';
import transactions from '/src/data/transactions.json';
import { formatDate } from '/src/helpers/formatDate';
const CryptoHistory = () => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr className={style.tr} key={transaction.id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{transaction.price}</td>
            <td className={style.td}>{transaction.amount}</td>
            <td className={style.td}>{formatDate(transaction.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
