import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {
    StyledLogoText,
    StyledLogoWrapper
} from './LogoStyles'
import {Icon} from 'components'
import {appConstants} from 'utils/appConstants'

const Logo: FC<{}> = () => (
    <StyledLogoWrapper title={appConstants.placeholder.LOGO}>
        <Link to={'/'}>
            <Icon d={Icon.res.LOGO} />
            <StyledLogoText>
                Read<strong>it</strong>
            </StyledLogoText>
        </Link>
    </StyledLogoWrapper>
)

export default Logo