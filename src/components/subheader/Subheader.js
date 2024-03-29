import React from 'react'
import "./Subheader.css"
import { useLocation } from 'react-router-dom'
function Subheader() {
  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  } 

  return (
    <div className='sub__header'>
        <div className="container">
          <div className="sub__container">
            <div>
              <button className='btn'>0% mudatli tolov</button>
              <button className='btn'>Chegirmalar</button>
              <span>Sayt xaritasi</span>
            </div>
            <div>
              <a href="tel:+998902606472">+998 91 352 55 56</a>
              <button className='btn'>HERMESdan sotib oling</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Subheader