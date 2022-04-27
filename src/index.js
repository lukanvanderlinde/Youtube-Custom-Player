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
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}
const app = initializeApp(firebaseConfig)

console.log(app)

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
