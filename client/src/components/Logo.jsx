import React from 'react';
import styled from 'styled-components'

import logo from '../logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

function Logo() {
    return(
        <Wrapper href="#">
            <img src={logo} alt="reactlogo" width="50" height="60"/>
        </Wrapper>
    )
}

export default Logo;
