import { Container } from "../produto/styled";
import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Cookies from "js-cookie";


export default function DetalheProdutos(props) {
    const [produto, setProduto] = useState(props.location.state)  
    const navigation = useHistory();

    function comprar() {

        //// O Cookie.get le o 'carrinho' e ser for diferente de nulo ele retorna um array vazio,
        //// se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()o
        let carrinho = Cookie.get('carrinho')
        carrinho = carrinho != null
                ? JSON.parse(carrinho)
                : []


        
    }



    return(

    )
}