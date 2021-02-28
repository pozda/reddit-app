import { ReactNode } from "react";

interface Props {
    condition: boolean,
    children?: ReactNode
}

const Conditional:React.FC<Props> = ({condition, children}: Props) => (condition ? <>{children}</> : <></>);

export default Conditional;