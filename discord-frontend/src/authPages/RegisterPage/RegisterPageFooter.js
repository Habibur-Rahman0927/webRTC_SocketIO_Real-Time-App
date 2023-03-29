import { Tooltip } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo';

const getFormNotValidMessage = () => {
    return 'Username should contains between 3 and 12 charaters and password should contains between 6 and 12 charater. Also enter correct e-mail address.';
}

const getFormValidMessage = () => {
    return 'Press to Register!';
}

export const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate('/login');
    }
    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>

            <RedirectInfo
                text="Already have an account? "
                redirectText='Log In '
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    )
}
