import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel';

export default function RegisterPageInputs(props) {
  const { mail, setMail, username, setUsername, password, setPassword } = props;
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label='User Name'
        type="text"
        placeholder="Enter user name"
      />
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label='E-mail'
        type="email"
        placeholder="Enter E-mail address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='Password'
        type="password"
        placeholder="Enter Password"
      />
    </>
  )
}
