import React, { useState } from 'react'
import './NavBar.scss';


type Props = {
    handleTask: (q: string) => void,
}

const NavBar = ({handleTask}: Props) => {
    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearch(query);
        handleTask(query);
    }

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
            <input placeholder='Pesquisas notas' type="text" value={search} onChange={handleChange}/>
        </div>
        <div className='x'>
            <img src="close.png" onClick={() => window.location.reload()} alt="" />
        </div>
    </header>
  )
}

export default NavBar