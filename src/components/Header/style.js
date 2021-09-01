import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.footer`
    width: 100%;
    min-height: 40px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    background-color: white;
    z-index: 9999;
    box-shadow: 1px 1px 1px  #B0B0B0;
`;
export const Container = styled.nav`
    width: 100%;
    //max-width: 1024px;

    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`;
export const NavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const NavTop = styled.nav`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF6A28;
    @media(max-width:600px){
        height: 40px;
    }
`;
export const NavLogo = styled(Link)`
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    transition: .3s;
    color: white;
    &:hover{
        font-size: 22px;
    }
    @media(max-width:600px){
        font-size: 16px;
    }
`;
export const Search = styled.input`
    width: 25%;
    height: 30px;
    margin-left: 16px;
    border-radius: 15px;
    padding: 2px 8px;
    border: none;
    transition: 0.3s;
    &:hover{
        box-shadow: 2px 2px 5px 1px rgba(250, 250,250, 0.5);
    }
`;
export const Div = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const NavMenu = styled.ul`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width:600px){
        height: 48px;
    }
`;
export const NavItem = styled(Link)`
    color: rgba(0, 0, 0, 0.75);
    font-size: 16px;
    text-decoration: none;
    padding: 8px;
    list-style: none;
    transition: .5s;
    cursor: pointer;
    &:hover{
        color: #FF6A28;
        font-size: 20px;
    }
    @media(max-width:600px){
        font-size: 13px;
        padding: px;
    }
`;
export const NavItemTop = styled(NavItem)`
    color: white;
    font-weight: 600;
    &:hover{
        color: white;
    }
`;