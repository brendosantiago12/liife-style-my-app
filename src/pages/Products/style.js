import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    padding-top: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: #F7F7F7;
`;
export const Container = styled.div`
    width: 96%;
    max-width: 1600px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    position: relative;
`;
export const ContentCard = styled.div`
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Category = styled.span`
    font-size: 12px;
    color: black;
    opacity: 0.7;
    display: flex;
    align-self: flex-start;
    margin-top: 16px;
    margin-left: 16px;
`;
export const Content = styled.div`
    width: 100%;
    min-height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

`;