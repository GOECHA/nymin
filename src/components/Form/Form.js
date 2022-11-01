import React from 'react'
import './Form.css'

const Form = () => {

  return (
    <div className='form-container'>
        <form>
            <input type='text' className='form-control' placeholder='Search'></input>
            <button className='btn'>Search</button>
        </form>
    </div>
  )
}

export default Form