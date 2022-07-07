import React from 'react'
import Logo from './Logo'

import styled from 'styled-components'


const HeaderStyle = styled.div`
.header{
  width: 100px;
  height: 100%;
  top:3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  position: fixed;
  right: -80px;
  padding: 1rem;
}

.header:hover{
  transition: all 700ms ease-in-out 25ms;
  right: 5px;

}

.nav{
  margin-top: 2rem;
  display: grid;
  gap: 0.5rem;
  
  button{
  background-color: #cead1d;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  }

  button:hover{
    opacity: 0.5;
    transition: all 700ms ease-in-out 25ms;
  }
}


}
`

const header = () => {
  return (  
    <HeaderStyle >
      <div className = 'header' >
   <Logo/>
<div className='nav'>
  <button href='#about'>About</button>
  <button href='#customers'>Customers</button>
  <button href='#contact'>Contact</button>

</div>

      </div>
    </HeaderStyle>
  )
}

export default header