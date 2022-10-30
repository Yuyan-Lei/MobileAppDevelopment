import React from 'react';
import ExpenseList from './expenseList';

// Screen that shows all expenses.
function AllExpensesScreen({navigation: { navigate }}) {
    return (
      <ExpenseList 
        showImportant={false} 
        navigate={navigate}
        />
    );
};

export default AllExpensesScreen;