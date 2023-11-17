import React, { useEffect } from 'react'
import Header from './Header';

const Template = ({ page }) => {
    useEffect(() => {
        document.title = page + " | Rafael Bayer";
    }, [page])
  return (
    <Header/>
  )
}

export default Template