import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Movimento from './Movimento';
import Volume from './Volume';
// import connect from './connect';
import {from} from 'rxjs';
import connect from './rxjs/connect';

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

let source1$ = from(fetch("api/nonblocking").then(v => v.json()));
let source2$ = from(fetch("api/nonblocking/fechamentoMaximo").then(v => v.json()));
let source3$ = from(fetch("api/nonblocking/fechamentoMinimo").then(v => v.json()));
let source4$ = from(fetch("api/nonblocking/retornoMaximo").then(v => v.json()));
let source5$ = from(fetch("api/nonblocking/retornoMinimo").then(v => v.json()));
let source6$ = from(fetch("api/nonblocking/volumeMedio").then(v => v.json()));

const Main = () => {
    return (
    <Switch>
        <Route exact path='/' component={connect(source1$)(Movimento)} />
        <Route path='/fechamentoMaximo' component={connect(source2$)(Movimento)} />
        <Route path='/fechamentoMinimo' component={connect(source3$)(Movimento)} />
        <Route path='/retornoMaximo' component={connect(source4$)(Movimento)} />
        <Route path='/retornoMinimo' component={connect(source5$)(Movimento)} />
        <Route path='/volumeMedio' component={connect(source6$)(Volume)} />
    </Switch>);
};

const App = () => {
    return (<div>
    <Header />
    <Main />
</div>);
}

export default App;
