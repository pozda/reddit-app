import React, {FC} from 'react'
import {StyledButton} from './ButtonStyles'
interface Props {
    text: string,
    onClick: () => void
}

const Button: FC<Props> = ({text, onClick}: Props) => (
    <StyledButton onClick={onClick}>
        {text}
    </StyledButton>
)

export default Button