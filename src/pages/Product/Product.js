import React from 'react'

import useFetch from '../../util/Fetch'
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import { MdFavoriteBorder } from 'react-icons/md';
import {Wrapper, Container, ContentProduct, ImageProduct, DetailsProduct, Details, InfoProduct,
    InfoProductTitle, InfoProductCategory, InfoProductPrice, InfoProductBuy, InfoProductAddCart} from './style'
import Footer from '../../components/Footer/Footer';

const Product = ()=>{
    const {id} = useParams();
    const {info} = useFetch(`/${Number(id)}`)
    return(
        <div>
            <Header/>
            <Wrapper>
            {info.data ? (
                <Container>
                    <ContentProduct>
                        <ImageProduct src={info.data.image}/>
                        <InfoProduct>
                            <InfoProductTitle>{info.data.title}</InfoProductTitle>
                            <InfoProductCategory>{info.data.category}</InfoProductCategory>
                            <InfoProductPrice>R$ {info.data.price}</InfoProductPrice>
                            <InfoProductBuy>Comprar agora</InfoProductBuy>
                            <InfoProductAddCart>
                                <MdFavoriteBorder style={{fontSize: 18, marginRight: 8}}/>
                                Adcionar ao carrinho
                            </InfoProductAddCart>
                        </InfoProduct>
                    </ContentProduct>
                    <DetailsProduct>
                        <Details>{info.data.description}</Details>
                    </DetailsProduct>
                </Container>
            ): <span>Carregando...</span>}
            </Wrapper>
            <Footer/>
        </div>
    )
}
export default Product;