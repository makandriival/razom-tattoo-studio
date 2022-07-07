import React from 'react'

import styled from 'styled-components'

const LogoStyled = styled.div`
    
    .logo h1{
  font-family: '';
  max-width: 100%;
  margin-bottom: -7px;
  /* margin-left: -10px; */
}

`

function Logo() {
  return (
    <LogoStyled>
        <div className='logo'>
<h1> Razom </h1>
<span>Tattoo Studio</span>
</div>
    </LogoStyled>
  )
}

export default Logo