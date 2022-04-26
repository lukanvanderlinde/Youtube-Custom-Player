import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'
import { initializeApp } from 'firebase/app'

import 'css/index.css'

import Website from 'routes/website'
import Dashboard from 'routes/dashboard'

const container = document.getElementById('root')
const root = createRoot(container)
const firebaseConfig = {
  apiKey: 'AIzaSyCCvSuN1_m3qTvYl3NqnBT0G_oCr3_8xqA',
  authDomain: 'mydashboard-c6c38.firebaseapp.com',
  projectId: 'mydashboard-c6c38',
  storageBucket: 'mydashboard-c6c38.appspot.com',
  messagingSenderId: '312250233056',
  appId: '1:312250233056:web:4470abd45b9f4280816085',
}
const app = initializeApp(firebaseConfig)

const index = (
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Website />} />

          <Route path='dashboard' element={<Dashboard />} />

          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>
)

root.render(index)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
