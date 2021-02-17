import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


//for more info about additional props read: 
// ***[https://styled-components.com/docs/basics#attaching-additional-props]
const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse'
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto'
    
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse'

})``


function Links() {
    return(
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                NodeMongo
            </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="/movies/list" className="nav-link">
                            List Movies
                        </Link>
                        <Link to="/movies/create" className="nav-link">
                           Create Movie
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links;
