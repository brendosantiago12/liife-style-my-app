import React from 'react'
import useFetch from '../../util/Fetch';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import Img from '../../images/download (2).jpg'
import Masculino from '../../images/ModaMasculina.jpg'
import Feminino from '../../images/ModaFeminina.jpg'
import Eletronicos from '../../images/Eletronicos.jpg'
import Joias from '../../images/Joias.jpg'

import { AiOutlineArrowRight } from 'react-icons/ai';
import { Wrapper , Container, Section, TitleSection, Title, TitleDark,
     Banner, Divisor, Call,  Hr, List, Category, CategoryImage, CategoryText } from './style';

const Home = ()=>{
    const {info} = useFetch("?limit=5")
    return(
        <div>
            <Header/>
            <Wrapper>
                <Section>
                    <Container>
                        <Banner src={Img}/>
                    </Container>
                </Section>

                <Section>
                        <Divisor>
                            <TitleDark>Categorias</TitleDark> <Hr/>
                            <Call to="/products">Seguir</Call>
                            <AiOutlineArrowRight style={{marginLef: -16}} />
                        </Divisor>

                    <Container>
                        <Category>
                            <CategoryImage src={Feminino}/>
                            <CategoryText>Moda Feminina</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={Masculino}/>
                            <CategoryText>Moda Masculino</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={Joias}/>
                            <CategoryText>Joias</CategoryText>
                        </Category>
                        <Category>
                            <CategoryImage src={Eletronicos}/>
                            <CategoryText>Eletronicos</CategoryText>
                        </Category>
                    </Container>
                </Section>

                <Section>
                        <TitleSection>
                            <Title>Destaques para você</Title>
                        </TitleSection>
                        <Container>
                            {info.data ? (
                                <List>
                                    {info.data.map((item)=>(
                                        <ProductCard item={item}/>
                                    ))}
                                </List>
                            ): <span>Carregando...</span> }
                        </Container>
                </Section>

            </Wrapper>
            <Footer/>
        </div>
    )
}
export default Home;