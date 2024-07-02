import css from "./Transaction.module.css";
import clsx from "clsx";
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table_container}>
      <thead>
        <tr>
          <th className={css.thead_row_item}>Type</th>
          <th className={css.thead_row_item}>Amount</th>
          <th className={css.thead_row_item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id}>
            <td
              className={clsx(
                css.tbody_row_item,
                index % 2 === 0 ? null : css.even_color
              )}
            >
              {type}
            </td>
            <td
              className={clsx(
                css.tbody_row_item,
                index % 2 === 0 ? null : css.even_color
              )}
            >
              {amount}
            </td>
            <td
              className={clsx(
                css.tbody_row_item,
                index % 2 === 0 ? null : css.even_color
              )}
            >
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
