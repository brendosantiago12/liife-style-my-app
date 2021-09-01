import React from 'react'

import useFetch from '../../util/Fetch'

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import Img from '../../images/download (2).jpg'
import ProductCard from '../../components/ProductCard/ProductCard';  
import {Wrapper, Container, Category, ContentCard, Content} from './style'  
import { Banner } from '../Home/style';
import {useParams} from 'react-router-dom'


const Products = ()=>{
    const {category} = useParams();
    
    const {info}= useFetch(category !== undefined ?`/category/${category}`:`?limit=16`)

    return(
        <div>
            <Header/>
            <Wrapper>
                <Banner src={Img}/>
                <Container>
                    <SideBar/>
                    <ContentCard>
                        {category && (
                            <Category>{category}</Category>
                        )}
                        
                        {info.data ? (
                            <Content>
                                {info.data.map((item)=>(
                                    <ProductCard key={item.id} item={item}/>
                                ))}
                            </Content>
                        ): <span>Carregando...</span>}
                    </ContentCard>
                </Container>
            </Wrapper>
            <Footer/>
        </div>
    )
}
export default Products;