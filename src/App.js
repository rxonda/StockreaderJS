import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Movimento from './Movimento';
import Volume from './Volume';
import connect from './connect';

const Header = () => {
    return(<header><nav><ul>
    <li><Link to='/'>Stock Reader</Link>
        <ul>
            <li><Link to="/fechamentoMaximo">Fechamento máximo</Link></li>
            <li><Link to="/fechamentoMinimo">Fechamento mínimo</Link></li>
            <li><Link to="/retornoMaximo">Retorno máximo</Link></li>
            <li><Link to="/retornoMinimo">Retorno mínimo</Link></li>
            <li><Link to="/volumeMedio">Volume médio por Ação</Link></li>
        </ul>
    </li>
</ul></nav></header>);
};

const Main = () => {
    return (
    <Switch>
        <Route exact path='/' component={connect("root")(Movimento)} />
        <Route path='/fechamentoMaximo' component={connect("fechamentoMaximo")(Movimento)} />
        <Route path='/fechamentoMinimo' component={connect("fechamentoMinimo")(Movimento)} />
        <Route path='/retornoMaximo' component={connect("retornoMaximo")(Movimento)} />
        <Route path='/retornoMinimo' component={connect("retornoMinimo")(Movimento)} />
        <Route path='/volumeMedio' component={connect("volumeMedio")(Volume)} />
    </Switch>);
};

const App = () => {
    return (<div>
    <Header />
    <Main />
</div>);
}

export default App;
