import { StyledButton } from "./ButtonStyles";

interface Props {
    text: string,
    onClick: () => void;
}

const Button: React.FC<Props> = ({text, onClick}:Props) => {

    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button;