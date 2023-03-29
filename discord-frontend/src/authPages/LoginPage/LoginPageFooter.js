import { Tooltip } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo';

const getFormNotValidMessage = () => {
    return 'Enter correct e-mail address and password should contains between 6 to 12 characters';
}

const getFormValidMessage = () => {
    return 'Press to Log in!';
}

export const LoginPageFooter = ({ isFormValid, handleLogin }) => {
    const navigate = useNavigate();
    const handlePushToRegisterPage = () => {
        navigate('/register');
    }
    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
                <div>
                    <CustomPrimaryButton
                        label="Log In"
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>

            <RedirectInfo
                text="Need an account? "
                redirectText='Create an account'
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    )
}
