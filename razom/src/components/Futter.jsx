import React from 'react'
import Logo from './Logo'

import styled from 'styled-components'

const FutterStyled = styled.div`

    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 10px;

span{
    display: flex;
    justify-content: center;
    font-size: 2rem;
}

.futter_logo{
    position: fixed;
    bottom: 10px;
    right: 10%;
    font-size: 2rem;
}

`

function Futter() {
  return (
    <FutterStyled>
  <span>
  <a href="mailto:razom@gmail.com">razom@gmail.com</a> 
  </span>
<div className='futter_logo'>
  <Logo/>
</div>

    </FutterStyled>
  )
}

export default Futter