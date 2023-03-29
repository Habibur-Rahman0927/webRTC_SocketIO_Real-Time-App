import React from 'react'
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';

const MainContainer = styled('div')({
    width: '72px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#202225',
})

function SideBar() {
  return (
    <MainContainer>
        <MainPageButton/>
    </MainContainer>
  )
}

export default SideBar