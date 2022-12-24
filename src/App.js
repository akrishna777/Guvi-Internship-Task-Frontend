import './App.css'
import SignIn from './Pages/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import User from './Pages/User'
import Profile from './Pages/Profile'
import Dashboard from './Pages/Dashboard'
import NoMatch from './Pages/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="user" element={<User />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App
