import React from 'react'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Router from './Router/Router'

const App = () => {
  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={1} autoHideDuration={1000}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SnackbarProvider>
    </RecoilRoot>
  )
  // return <UserLoginPage />
}

export default App
