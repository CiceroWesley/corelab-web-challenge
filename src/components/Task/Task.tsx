import React, { useState } from 'react'
import './Task.scss';
import CoolorsTab from '../CoolorsTab/CoolorsTab';


type Props = {}

const Task = (props: Props) => {
    const [backet, setBacket] = useState(false);
    const [color, setColor] = useState<string>('#FFFFFF')

    if(color){
        console.log(color)
    }
    
  return (
    <>
        <div style={{backgroundColor: color}} className='task'>
            <div className='header'>
                <div>
                    <input type="text" placeholder='Titulo' />
                </div>
                <div>
                    <img src="star.png" alt="star icon" />
                </div>
            </div>
            <hr />
            <div>
                <div className='description'>
                    <textarea placeholder='Descrição' style={{backgroundColor: color}} name="" id=""></textarea>
                </div>
                <div className='footer'>
                    <div className='options'>
                        <div>
                            <img src="pencil.png" alt="pencil icone" />
                        </div>
                        <div>
                            <img onClick={() => setBacket(!backet)} src='backet.png' style={backet ? {backgroundColor: '#FFE3B3', borderRadius:'50%', padding: '2px'} : {}} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src="close.png" alt="" />
                    </div>
                </div>
            </div>
        
        </div>
        {backet && <CoolorsTab setColor={setColor}/>}
    </>
  )
}

export default Task;