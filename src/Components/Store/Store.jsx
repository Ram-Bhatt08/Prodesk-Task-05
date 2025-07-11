import { configureStore } from '@reduxjs/toolkit';
import budgetsReducer from '../Budgets/budgetsSlice';
import transactionsReducer from '../Transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    transactions: transactionsReducer,
  },
});
