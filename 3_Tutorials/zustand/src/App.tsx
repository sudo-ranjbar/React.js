
import './App.css'
import { useCounterStore } from './stores/counterStore'

function App() {
  const counter = useCounterStore((state) => state.counter)
  return (
    <>
      <h1>{counter}</h1>
      <OtherComponent />
    </>
  )
}

function OtherComponent() {
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  return (
    <div className='group-button'>
      <button onClick={increase}>
        increase +
      </button>
      <button onClick={decrease}>
        decrease -
      </button>
      <AsyncIncrement />
    </div>
  )

}

function AsyncIncrement() {
  const increaseAsync = useCounterStore((state) => state.increaseAsync)
  return (
    <button onClick={increaseAsync}>
      icrease after 1 second
    </button>
  )
}

export default App
