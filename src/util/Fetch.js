import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useFetch(endpoint,id=0 ){
    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products${endpoint}`)
            .then( res => setInfo(res) )
            .catch( error => console.log(error))
    },[endpoint])

    return { info}
}
