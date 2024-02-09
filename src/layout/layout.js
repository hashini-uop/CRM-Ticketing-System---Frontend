import React from 'react'
import Header from './partials/header/header'
import Footer from './partials/footer/footer'

const Layout = ({children}) => {
  return (
    <div>
      <div className='layout'>
        <header className='header'>
          <Header />
        </header>
        <main className='main'> 
         {children}
        </main>
        <footer className='footr'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default Layout