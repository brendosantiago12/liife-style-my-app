import React from 'react'

import useFetch from '../../util/Fetch'
import { GiSmartphone } from 'react-icons/gi';
import { RiHandbagLine } from 'react-icons/ri';
import { RiTShirtLine } from 'react-icons/ri';
import { GiLargeDress } from 'react-icons/gi';
import { Wrapper, Item, Items, SideTitle} from './style'

const SideBar = ()=>{
    const {info} = useFetch("/categories")
    
    return(
        <Wrapper>
            <SideTitle>Filtre por:</SideTitle>
            {info.data && (
                <Items>
                    <Item  to={`/products/${info.data[0]}`}>
                        <GiSmartphone style={{fontSize: 18, marginRight: 8}}/>{info.data[0]}
                    </Item>
                    <Item to={`/products/${info.data[1]}`}>
                        <RiHandbagLine style={{fontSize: 18, marginRight: 8}}/>{info.data[1]}
                    </Item>
                    <Item to={`/products/${info.data[2]}`}>
                        <RiTShirtLine style={{fontSize: 18, marginRight: 8}}/>{info.data[2]}
                    </Item>
                    <Item to={`/products/${info.data[3]}`}>
                        <GiLargeDress style={{fontSize: 18, marginRight: 8}}/>{info.data[3]}
                    </Item>
                </Items>
            )}
            
        </Wrapper>
    )
}
export default SideBar;