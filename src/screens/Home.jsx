import React, { useState } from 'react'
import Template from './template/Template'

const Home = () => {
    const [page, setPage] = useState("Home");
  return (
    <Template page={page}>
        
    </Template>
  )
}

export default Home