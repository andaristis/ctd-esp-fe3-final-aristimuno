import React from 'react'
import { useContextGlobal } from './utils/global.context'
const Footer = () => {
const {state} = useContextGlobal()
  return (
    <footer className='footer'>
      <p>Powered by</p>
      <img src="../images/DH.png" alt='DH-logo' />
      <img className={state.theme !== 'dark' ? 'invertir-colores':''} src="../images/ico-facebook.png" alt='ico-facebook' />
      <img className={state.theme !== 'dark' ? 'invertir-colores':''}src="../images/ico-instagram.png" alt='ico-instagram' />
      <img className={state.theme !== 'dark' ? 'invertir-colores':''}src="../images/ico-tiktok.png" alt='ico-tiktok' />
      <img className={state.theme !== 'dark' ? 'invertir-colores':''}src="../images/ico-whatsapp.png" alt='ico-whatsapp' />
    </footer>
  )
}

export default Footer
