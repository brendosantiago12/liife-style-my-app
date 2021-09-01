import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: #F7F7F7;
`;
export const Section = styled.section`
    width: 100%;
    min-height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Container = styled.div`
    width: 96%;
    max-width: 1600px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const Banner = styled.img`
    width: 90%;
    height:40vh;
    object-fit: cover;
    object-position: center;
`;
export const TitleSection = styled.div`
    width: 100%;
    height:40px;
    background-color: #FF6A28;
    display: flex;
    justify-content:center;
    align-items: center;
`;
export const Title = styled.h3`
    font-size: 20px;
    font-weight: 100;
    color: white;
`;
export const TitleDark = styled(Title)`
    cursor: pointer;
    color: black;
    opacity: 0.7;
    &:hover{
        color: #FF6A28;
        opacity: 1;
    }
`;
export const List = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const Divisor = styled.div`
    width: 90%;
    height:60px;
    display: flex;
    justify-content:space-between;
    align-items: center;
`;
export const Hr = styled.hr`
    width: 80%;
    height: 1px;
    margin: 0 8px;
    color: black;
    opacity: 0.7;
`;
export const Call = styled(Link)`
    font-size: 16px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    opacity: 0.7;
    &:hover{
        color: #FF6A28;
        opacity: 1;
    }
`;
export const Category = styled(Link)`
    width: 300px;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    margin: 8px;
    margin-bottom: 32px;
    padding: 24px 0;
`;
export const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
    opacity: 0.9;
`;
export const CategoryText = styled.p`
    font-size: 20px;
    font-weight: 600;

    padding: 4px 16px;
    color: white;
    border-radius: 2px;
    background-color: red;
    position: absolute;
`;