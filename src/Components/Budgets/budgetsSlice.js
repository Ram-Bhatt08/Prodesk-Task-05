import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgets: [],
};

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.budgets.push(action.payload);
    },
    editBudget: (state, action) => {
      const index = state.budgets.findIndex(b => b.id === action.payload.id);
      if (index !== -1) {
        state.budgets[index] = action.payload;
      }
    },
  },
});

export const { addBudget, editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
