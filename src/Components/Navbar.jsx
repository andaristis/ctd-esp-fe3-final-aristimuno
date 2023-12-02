import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  
const {state, dispatch} = useContextGlobal()
  
const handleOnclick = ()=>{
  const newTheme = state.theme === 'dark' ? 'light': 'dark'
  dispatch({type: 'CHANGE_THEME', payload: newTheme})
}
return (
  <>
  <div className='fondo-header'>
    <header className={`header ${state.theme === 'dark' ? 'dark' : ''}`}>
      <nav className={`nav ${state.theme === 'dark' ? 'dark' : ''}`}>
        <h2>DH Odonto</h2>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contact</h4></Link>
        <Link to='/favs'><h4>Favs</h4></Link>
        {state.theme === 'dark' ? <button className='themeButton' onClick={handleOnclick}>😎</button>:<button className='themeButton'onClick={handleOnclick}>🌙</button>}
      </nav>
    </header>
  </div>
  </>
  )
}

export default Navbar