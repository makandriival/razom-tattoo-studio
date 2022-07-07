import React from 'react'

import styled from 'styled-components'

const StyledModal = styled.div`
    
   background-color: red;

`

function ModalContact({open}) {
    if (!open) return null

  return (
      <StyledModal>
    <div>
        opened
    </div>
      </StyledModal>
  )
}

export default ModalContact