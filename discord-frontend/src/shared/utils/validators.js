export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    return isMailValid && isPasswordValid;
}
export const validateRegisterForm = ({ username,mail, password }) => {
    const isUsernameValid = validateUsername(username);
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    return isUsernameValid && isMailValid && isPasswordValid;
}

const validateUsername= (username) => {
    return username.length > 2 && username.length < 15;
}

const validatePassword = (password) => {
    return password.length > 5 && password.length < 12;
}

const validateMail = (mail) => {
    const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return mailPattern.test(mail);

}