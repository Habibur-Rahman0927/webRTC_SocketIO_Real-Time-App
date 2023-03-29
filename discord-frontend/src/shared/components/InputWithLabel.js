import React from 'react'
import { styled } from '@mui/system';


const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
})

const Label = styled('p')({
    color: '#b9bbbe',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '600',
})

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px',
    borderRadius: '1px solid black',
    color: '#dcddde',
    background: '#35393f',
    margin: 0,
    fontSize: '16px',
    padding: '0 5px',
})
export default function InputWithLabel(props) {
    const { value, setValue, label, type, placeholder } = props;
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                placeholder={placeholder}
            />
        </Wrapper>
    )
}
