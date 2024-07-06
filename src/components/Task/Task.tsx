import React from 'react'
import './Task.scss';


type Props = {}

const Task = (props: Props) => {
  return (
    <div style={{backgroundColor:'red'}} className='task'>
        <div className='header'>
            <div>
                <span>TITULO</span>
            </div>
            <div>
                FAVORITO
            </div>
        </div>
        <hr />
        <div>
            <div className='description'>
                DESCRIÇÃO
            </div>
            <div className='footer'>
                <div className='options'>
                    <div>
                        LÁPIS
                    </div>
                    <div>
                        COR
                    </div>
                </div>
                <div>
                    X
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Task;