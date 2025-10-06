import LoginForm from '../components/LoginForm'
import DailyWorkLog from '../components/WorkLog'
import TimeClock from '../components/TimeClock'
import TimeTiles from '../components/TimeTiles'
import '../styling/App.css'

function App() {

  return (
    <>
      <LoginForm />
      <DailyWorkLog />
      <TimeClock />
      <TimeTiles />
    </>
  )
}

export default App
