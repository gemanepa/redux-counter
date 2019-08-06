function counter(state, action) {
  console.log('===============')
  console.log(state)
  console.log(action)
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INCREMENTx10':
      return state + 10
    case 'DECREMENTx5':
      return state - 5
    default:
      return state
  }
}

var store = Redux.createStore(counter)
var valueEl = document.getElementById('value')

function render() {
  valueEl.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)

document.getElementById('increment')
  .addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' })
  })

document.getElementById('decrement')
  .addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' })
  })

document.getElementById('incrementIfOdd')
  .addEventListener('click', function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: 'INCREMENT' })
    }
  })

document.getElementById('incrementIfEven')
  .addEventListener('click', function () {
    if (store.getState() % 2 == 0) {
      store.dispatch({ type: 'INCREMENT' })
    }
  })

document.getElementById('incrementAsync')
  .addEventListener('click', function () {
    setTimeout(function () {
      store.dispatch({ type: 'INCREMENT' })
    }, 5000)
  })

document.getElementById('decrementAsync')
  .addEventListener('click', function () {
    setTimeout(function () {
      store.dispatch({ type: 'DECREMENT' })
    }, 3000)
  })

document.getElementById('incrementx10')
    .addEventListener('click', function() {
    store.dispatch({ type: 'INCREMENTx10' })
  })

document.getElementById('decrementx5').addEventListener('click', () => store.dispatch({type: 'DECREMENTx5'}))