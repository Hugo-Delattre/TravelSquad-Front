import React from 'react'
import { Button } from 'semantic-ui-react'

import './style.scss'

const NavBar = () => {
  return (
    <header>
      <nav id='header--nav'>
        <div className="logo">
        <h1 className='nav__title'>TravelSquad</h1>
        </div>
        <div className="nav--list">
        <ul className='list' >
           <li><a href="*">Découvrir les destinations</a></li>
          <li><a href="*">Créer un groupe</a></li> 
        </ul>
        </div>
        <div className="log--btn">
        <Button primary >Sign up</Button>
        <Button>Log-in</Button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;