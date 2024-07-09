import React, { useState } from 'react'
import './Task.scss';
import CoolorsTab from '../CoolorsTab/CoolorsTab';
import { TaskType } from '../../types/Task';



const Task = (props: TaskType) => {
    const [backet, setBacket] = useState(false);
    const [color, setColor] = useState<string>('#FFFFFF');
    const [favorite, setFavorite] = useState<boolean>(false)
    
  return (
    <>
        <div style={{backgroundColor: color}} className='task'>
            <div className='header'>
                <div>
                    <input type="text" placeholder='Titulo' value={props.title} />
                </div>
                <div>
                    {!props.favorite && <img src="star.png" alt="star icon" onClick={() => setFavorite(true)} />}
                    {props.favorite && <img src="starActive.png" alt="star icon" onClick={() => setFavorite(false)}/>}
                </div>
            </div>
            <hr />
            <div>
                <div className='description'>
                    <textarea value={props.description} placeholder='Descrição' style={{backgroundColor: color}} name="" id=""></textarea>
                </div>
                <div className='footer'>
                    <div className='options'>
                        <div>
                            <img src="pencil.png" alt="pencil icone" />
                        </div>
                        <div>
                            <img onClick={() => setBacket(!backet)} src='backet.png' style={backet ? {backgroundColor: `${props.color}`, borderRadius:'50%', padding: '2px'} : {}} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src="close.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='color'>{backet && <CoolorsTab setColor={setColor}/>}</div>
        </div>
        
    </>
  )
}

export default Task;