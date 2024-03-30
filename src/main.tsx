import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/index.tsx'
import PageBody from './Components/PageBody/index.tsx'
import Footer from './Components/Footer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <main>
        <PageBody/>
        <Footer/>
      </main>
  </React.StrictMode>,
)
