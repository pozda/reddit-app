import { ReactNode } from 'react'

import {
    StyledLayout,
    StyledLayoutLeft,
    StyledLayoutRight,
    StyledLayoutHeader,
    StyledLayoutMain
} from './LayoutComponentStyles'

interface Props { children?: ReactNode; }

const LayoutComponent = ({children}: Props) => (<StyledLayout> {children} </StyledLayout>)

LayoutComponent.Header = StyledLayoutHeader
LayoutComponent.Main = StyledLayoutMain
LayoutComponent.Left = StyledLayoutLeft
LayoutComponent.Right = StyledLayoutRight

export default LayoutComponent