import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
  // return <UserLoginPage />
}

export default App
