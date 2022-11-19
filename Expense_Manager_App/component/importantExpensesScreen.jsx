import ExpenseList from './expenseList';

// Screen that shows important expenses.
function ImportantExpensesScreen({navigation: { navigate }}) {
    return (
        <ExpenseList 
          showImportant={true} 
          navigate={navigate}
          />
      );
};

export default ImportantExpensesScreen;