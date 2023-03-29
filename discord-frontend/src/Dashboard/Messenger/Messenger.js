import React from 'react'
import { styled } from '@mui/system';

const MainContainer = styled('div')({
    flexGrow: '1',
    marginTop: '48px',
    backgroundColor: '#36393f',
    display: 'flex',
})

function Messenger() {
  return (
    <MainContainer>Messenger</MainContainer>
  )
}

export default Messenger