import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import 'react-sidebar-ui/dist/index.css'
import '../components/Dashboard.css'
import Stocks from './Stocks'

function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()


  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <Stocks />
      </div>
    </>
  )
}

export default Dashboard