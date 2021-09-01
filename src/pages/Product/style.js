import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    padding-top: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: #F7F7F7;
`;
export const Container = styled.div`
    width: 96%;
    max-width: 1600px;
    min-height: 90vh;

    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const ContentProduct = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const ImageProduct = styled.img`
    width: 400px;
    height: 80vh;
    object-fit: cover;
    object-position: center;
    margin-bottom: 16px;
    @media(max-width: 1000px){
        width: 360px;
    }
    @media(max-width: 800px){
        width: 300px;
    }
    @media(max-width: 600px){
        width: 80%;
        height: 70vh;
    }
    @media(max-width: 400px){
        width: 100%;
    }
`;
export const InfoProduct = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 32px;
    @media(max-width: 600px){
        width: 80%;
    }
    @media(max-width: 400px){
        width: 100%;
    }
`;
export const InfoProductTitle = styled.h3`
    font-size: 24px;
    font-weight: 400;
    color: black;
    opacity: 0.7;
    margin-bottom: 16px;
    @media(max-width: 800px){
        font-size: 20px;
        font-weight: 200;
    }
`;
export const InfoProductCategory = styled.p`
    font-size: 16px;
    font-weight: 200;
    color: black;
    opacity: 0.5;
    margin-bottom: 16px;
    @media(max-width: 800px){
        font-size: 14px;
        font-weight: 100;
    }
`;
export const InfoProductPrice = styled.span`
    font-size: 20px;
    font-weight: 300;
    color: black;
    opacity: 0.7;
    margin-bottom: 16px;
    @media(max-width: 800px){
        font-size: 18px;
        font-weight: 100;
    }
`;
export const InfoProductBuy = styled.button`
    width: 70%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content:center;
    color: white;
    border: none;
    margin-bottom: 16px;
    background-color: #FF6A28;
    opacity: 0.7;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`;
export const InfoProductAddCart = styled(InfoProductBuy)`
    color: black;
    background-color: white;
`;
export const DetailsProduct = styled.div`
    width: 80%;
    min-height: 20vh;
    margin-top: 32px;
    border-top: 1px solid black;
    opacity: 0.7;
    display: flex;
    margin-bottom: 32px;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    @media(max-width: 600px){
        width: 90%;
        margin-left: 0;
        margin-top: 8px;
    }
`;
export const Details = styled.p`
    font-size: 16px;
    color: black;
    opacity: 0.8;
    @media(max-width: 600px){
        font-size: 12px;
    }
`;