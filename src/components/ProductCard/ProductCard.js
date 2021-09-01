import React from 'react'
import { CardDestaques, CardDestaquesTxt, CardDestaquesCategory,
        CardDestaquesImg, CardDestaquesTitle, CardDestaquesbtn, Price} from './style'

const ProductCard = ({item})=>{
    return(
        <CardDestaques to={`/product/${item.id}`}>
            <CardDestaquesImg src={item.image}/>
            <CardDestaquesTxt>
                <CardDestaquesTitle>{item.title}</CardDestaquesTitle>
                <CardDestaquesCategory>{item.category}</CardDestaquesCategory>
                <Price>R${item.price}</Price>
                <CardDestaquesbtn to={`/product/${item.id}`}>Pegar agora</CardDestaquesbtn>
            </CardDestaquesTxt>
        </CardDestaques>
    )
}
export default ProductCard;