import React, { useEffect, useState } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import { Typography } from '@mui/material';
import RegisterPageInputs from './RegisterPageInputs';
import { RegisterPageFooter } from './RegisterPageFooter';
import { validateRegisterForm } from './../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ register }) => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  // const localUserDetails = localStorage.getItem('user')
  const navigate = useNavigate();
  useEffect(() => {
    setIsFormValid(validateRegisterForm({ username, mail, password }))
  }, [mail, password, setIsFormValid, username])

  const handleRegister = () => {
    const userDetails = {
      username,
      mail,
      password,
    }
    register({ userDetails, navigate })
  }
  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter isFormValid={isFormValid} handleRegister={handleRegister} />
    </AuthBox>
  )
}
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterPage);

