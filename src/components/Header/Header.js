import React,{useState, useEffect} from 'react'

import axios from 'axios'
import { NavBar, Container,NavTop,NavLogo,NavContainer,Div, Search, NavMenu,NavItemTop, NavItem} from './style'
const Header = ()=>{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.log(error))
    },[])
    return(
        <NavBar>
            <Container>
                <NavTop>
                    <NavContainer>
                        <NavLogo to="/">LifeStyle</NavLogo>
                        <Div>
                            <NavItemTop to="/products">Loja</NavItemTop>
                            <Search  placeholder="Search" />
                        </Div>

                    </NavContainer>
                </NavTop>
                <NavMenu>
                    <NavContainer>
                        {categories.length > 0 ? (
                            categories.map((category, index)=>(
                                <NavItem key={index} to={`/products/${category}`}>{category}</NavItem>
                            ))
                        ) : <span>carregando...</span>}
                    </NavContainer>
                </NavMenu>
            </Container>
        </NavBar>
    )
}
export default Header;