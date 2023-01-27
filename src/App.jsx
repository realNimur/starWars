import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CharactersPage, ErrorPage, HomePage } from './pages'
import { CHARACTERS_PAGE } from './utils/routes.js'
import { CharactersDataContextProvider, IntlProvider } from './context'
import { Loader } from './components'
import './App.scss'
import './assets/css/fonts.scss'
import './utils/css/global.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: CHARACTERS_PAGE,
    element: <CharactersPage />,
  },
])

function App() {
  return (
    <IntlProvider>
      <CharactersDataContextProvider>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </CharactersDataContextProvider>
    </IntlProvider>
  )
}

export default App
