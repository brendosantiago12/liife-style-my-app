import  styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled.nav`
    width: 20%;
    min-height: 30vh;
    background-color: white;
    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-direction: column;
    padding: 16px;
    position: sticky;
    top: 130px;
    border-radius: 8px;
    margin-top: 16px;
    margin-right: 10px;
    @media(max-width: 600px){
        display: none;
    }
`;
export const SideTitle = styled.h3`
    font-size: 24px;
    color: #FF6A28;
    opacity: 0.9;
    margin-bottom: 20px;
`;
export const Items = styled.ul`
    width: 100%;
    padding: 0 8px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    opacity: 0.7;
    
`;
export const Item = styled(Link)`
    width: calc(100% + 24px) ;
    padding: 12px 8px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.8;
    font-size: 14px;
    list-style: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 4px;
    transition: 0.9s;
    border-bottom: 2px solid #F7F7F7;
    &:hover{
        background-color: #F7F7F7;
        opacity: 1;
        color: #FF6A28;
    }
`;