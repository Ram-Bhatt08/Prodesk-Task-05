import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBudget } from '../Budgets/budgetsSlice';
import './Transactions.css'; // ✅ Import CSS
import { addTransaction } from './transactionsSlice';

function Transactions() {
  const budgets = useSelector(state => state.budgets.budgets);
  const transactions = useSelector(state => state.transactions.transactions);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('debit');

  const handleAdd = () => {
    const amt = parseFloat(amount);
    if (!amt || !category) return;
    dispatch(addTransaction({ amount: amt, category, type }));
    const target = budgets.find(b => b.name === category);
    if (type === 'debit') {
      dispatch(editBudget({ ...target, used: target.used + amt }));
    }
    setAmount('');
    setCategory('');
  };

  return (
    <div className="transactions-container">
      <h2 className="transactions-header">Transactions</h2>
      <div className="transaction-form">
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {budgets.map(b => (
            <option key={b.id} value={b.name}>{b.name}</option>
          ))}
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
        </select>
        <button onClick={handleAdd}>Add Transaction</button>
      </div>
      <ul className="transaction-list">
        {transactions.map((t, i) => (
          <li key={i} className={`transaction-item ${t.type}`}>
            {t.date} – <strong>{t.category}</strong> – ₹{t.amount} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
