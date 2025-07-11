import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget } from './budgetsSlice';
import './Budgets.css';

function Budgets() {
  const budgets = useSelector(state => state.budgets.budgets);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!name || !amount) return;
    dispatch(addBudget({ id: Date.now(), name, amount: parseFloat(amount), used: 0 }));
    setName('');
    setAmount('');
  };

  return (
    <div className="budgets-container">
      <h2 className="budgets-header">Manage Budgets</h2>
      <div className="budget-form">
        <input
          type="text"
          placeholder="Budget Category (e.g., Rent)"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button onClick={handleAdd}>Add Budget</button>
      </div>
      <ul className="budget-list">
        {budgets.map(b => (
          <li key={b.id} className="budget-item">
            <strong>{b.name}</strong>: ₹{b.amount} (Used: ₹{b.used})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Budgets;

