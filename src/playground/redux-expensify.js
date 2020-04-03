import { createStore, combineReducers } from 'redux'














store.subscribe(() => {
    const state = store.getState()
    console.log('Expenses', state.expenses)
    console.log('Filters', state.filters)
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('ffe'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())


// store.dispatch(setStartDate(-3000))
// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(3000))


const demoState = {
    expenses: [{
        id: 'qweewq',
        description: 'January Rent',
        note: 'This was final payment for address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

