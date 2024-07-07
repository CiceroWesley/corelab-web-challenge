import React from 'react'
import './CreateTask.scss'


type Props = {}

const CreateTask = (props: Props) => {
  return (
    <div style={{backgroundColor: 'white'}} className='createTask'>
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
                    <textarea placeholder='Descrição' style={{backgroundColor: 'white'}} name="" id=""></textarea>
                </div>
            </div>
        
        </div>
  )
}

export default CreateTask