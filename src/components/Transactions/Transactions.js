import PropTypes from 'prop-types';
import {
  Head,
  Line,
  Td,
  TransactionTable,
  Type,
} from './Transactions.styles';

export const Transactions = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <Head>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </Head>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Line key={id}>
            <Type>{type}</Type>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Line>
        ))}
      </tbody>
    </TransactionTable>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};