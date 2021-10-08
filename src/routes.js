import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './infoX/home'
import DetalheProduto from './infoX/detalheProduto'
import Carrinho from './infoX/carrinho'
import Contador from './contador'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" exact={true} component={Carrinho} /> 
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
                <Route path="/contador" exact={true} component={Contador} />     
            </Switch>
        </BrowserRouter>
    )
}