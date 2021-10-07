import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoItem'





export default function Carrinho() {
  const [produtos, setProdutos] = useState([]);
  

  // Chama a função 'carregarCarrinho' na abertura da pag
  useEffect(carregarCarrinho, []);



  function carregarCarrinho() {
    // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse(), se estiver vazio, volta um Array vazio []
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                  ? JSON.parse(carrinho) 
                  : [];

    setProdutos(carrinho);
  }
  

  function removerProduto(id) {
    // Buscar todos os Itens do Carrinho DIFERENTES do produto que está sendo removido 
    let carrinho = produtos.filter(item => item.id !== id);
    
    // Atualiza o Cookie
    Cookie.set('carrinho', JSON.stringify(carrinho));

    // Atualiza a variável de estado e copia todos os campos de carrinho
    setProdutos([...carrinho]);
  }


  function alterarProduto(id, qtd) {
     // Busca o id do Produto e atualiza o campo de 'qtd'
     let produtoAlterado = produtos.filter(item => item.id === id)[0];
     produtoAlterado.qtd = qtd;
 
     // Atualiza o Cookie
     Cookie.set('carrinho', JSON.stringify(produtos));
  }





  return (
    <Container>
      <h1> Carrinho </h1>

      <Link to="/"> Voltar </Link>

      <div className="itens">
        {produtos.map(item => 
            <CarrinhoItem key={item.id} 
                info={item} 
                onUpdate={alterarProduto} 
                onRemove={removerProduto} />
        )}
      </div>

    </Container>
  )


}