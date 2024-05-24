import React from 'react'
import MainTop from './sections/MainTop/MainTop'
import Category from './Category/Category'
import Products from './sections/Peoducts/Products'
import News from './sections/News/News'
import Upt from './sections/Upt/Upt'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <MainTop />
      <Category />
      <Products />
      <News />
      <Upt />
    </div>
  )
}

export default Home