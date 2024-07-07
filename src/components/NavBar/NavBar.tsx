import React from 'react'
import './NavBar.scss';


type Props = {}

const NavBar = (props: Props) => {
  return (
    <header className='header'>
        <div className='iconAndText'>
            <div>
                <img src="notes.png" alt="Notes icon" />
            </div>
            <div className='space'>
                <span>CoreNotes</span>
            </div>
        </div>
        <div className='searchNotes'>
            <input placeholder='Pesquisas notas' type="text" />
        </div>
        <div className='x'>
            <img src="close.png" onClick={() => window.location.reload()} alt="" />
        </div>
    </header>
  )
}

export default NavBar