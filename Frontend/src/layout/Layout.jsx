import React from 'react'
import Routers from '../routes/Routers'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layout = () => {
  return (
<>
<Header/>
<main>
  <Routers/>
</main>
<Footer/>
</>
  )
}

export default Layout