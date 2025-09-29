import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import { users as mockUsers } from "./data/users";
import UserTable from "./components/UserTable";


const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default App