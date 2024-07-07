import React, { Dispatch, useState } from 'react'
import './CoolorsTab.scss'

type Props = {
    setColor: React.Dispatch<React.SetStateAction<string>>;
}

const CoolorsTab = ({setColor}: Props) => {

  return (
    <div className='tabs'>
        <img src="blue.png" alt="blue coolor" onClick={() => setColor('#BAE2FF')} />
        <img src="Ellipse 2.png" alt="light green coolor" onClick={() => setColor('#B9FFDD')}/>
        <img src="Ellipse 3.png" alt="" onClick={() => setColor('#FFE8AC')}/>
        <img src="Ellipse 4.png" alt="" onClick={() => setColor('#FFCAB9')}/>
        <img src="Ellipse 5.png" alt="" onClick={() => setColor('#F99494')}/>
        <img src="Ellipse 6.png" alt="" onClick={() => setColor('#9DD6FF')}/>
        <img src="Ellipse 7.png" alt="" onClick={() => setColor('#ECA1FF')}/>
        <img src="Ellipse 9.png" alt="" onClick={() => setColor('#DAFF8B')}/>
        <img src="Ellipse 11.png" alt="" onClick={() => setColor('#FFA285')}/>
        <img src="Ellipse 8.png" alt="" onClick={() => setColor('#CDCDCD')}/>
        <img src="Ellipse 10.png" alt="" onClick={() => setColor('#979797')}/>
        <img src="Ellipse 12.png" alt="" onClick={() => setColor('#A99A7C')}/>
    </div>
  )
}

export default CoolorsTab