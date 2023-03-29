import React from 'react'
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitile from './FriendsTitile';
import FriendsList from './FriendsList';
import PendingInvitationList from './PendingInvitationList';

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2F3136',
})

function FriendSideBar() {
  return (
    <MainContainer>
        <AddFriendButton/>
        <FriendsTitile title='Private Messages' />
        <FriendsList />
        <FriendsTitile title='Invitations'/>
        <PendingInvitationList />
    </MainContainer>
  )
}

export default FriendSideBar