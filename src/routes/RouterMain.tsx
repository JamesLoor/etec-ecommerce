import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import { Home } from '../pages'

const RouterMain: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterMain
