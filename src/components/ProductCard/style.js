import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardDestaques = styled(Link)`
width: 240px;
height: 60vh;
text-decoration: none;
display: flex;
justify-content:center;
align-items: center;
flex-direction:column;
margin-top: 16px;
margin-right: 16px;
padding-bottom: 8px;
cursor: pointer;
border-radius: 10px;
transform: scale(0.9);
background-color:#FFFFFF;
transition: all ease .2s;
&:hover{
    transform: scale(1);
    box-shadow: -2px -2px 10px 5px #D8D8D8;
}
`;
export const CardDestaquesImg = styled.img`
width: 240px;
height: 50%;
border-radius: 16px;
object-fit: cover;
object-position: center;
`;
export const CardDestaquesTxt = styled.div`
width: 100%;
height: 50%;
padding: 32px;
display: flex;
align-items: center;
justify-content:space-between;
flex-direction: column;
overflow: hidden;
`;
export const CardDestaquesTitle = styled.h3`
color: rgba(0, 0, 0, 0.8);
font-size: 12px;
margin: 8px 0;
`;
export const CardDestaquesCategory = styled.p`
color: rgba(0, 0, 0, 0.9);
font-size: 12px;
margin: 2px 0;
`;
export const CardDestaquesbtn = styled(Link)`
display: flex;
justify-content:center;
align-items: center;
width: 80%;
min-height: 32px;
border: 1px solid #FF6A28;
color: #FF6A28;
font-size: 16px;
font-weight: 600;
margin-top: 8px;
opacity: 0.7;
background: white;
text-decoration: none;
cursor: pointer;
transition: .8s;
&:hover{
    background: white;
    opacity: 1;
}
`;
export const Price = styled.span`
    font-size: 16px;
    color: black;
    opacity: 0.7;
`