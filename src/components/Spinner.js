import React from 'react'
// import loading from './loading.gif'
// import loading from '../Icons/cap-unscreen.gif'
import loading1 from '../Icons/cap1-unscreen.gif'

const Spinner = () => {

    return (
      <div className='d-flex justify-content-center align-items-center text-center' style={{marginTop:"140px"}}>
        <img src={loading1} alt="loading..." style={{width:"20%", margin:"100px"}} />
      </div>
    )
}

export default Spinner;