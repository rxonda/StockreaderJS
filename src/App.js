import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
      super();
      this.state = {items: []}
  }

  componentWillMount() {
    fetch('api/nonblocking')
    .then( reponse => reponse.json() )
    .then( (results) => this.setState({items: results}))
  }

  render() {
    let items = this.state.items;

    return (<div><nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                  <a className="navbar-brand" href="#">Stock Reader</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                      <li className="dropdown">
                          <a className="dropdown-toggle" data-toggle="dropdown" role="button"
                          aria-expanded="true">Testes <span className="caret"></span></a>
                          <ul className="dropdown-menu" role="menu">
                              <li><a href="#/fechamentoMaximo">Fechamento máximo</a></li>
                              <li><a href="#/fechamentoMinimo">Fechamento mínimo</a></li>
                              <li><a href="#/retornoMaximo">Retorno máximo</a></li>
                              <li><a href="#/retornoMinimo">Retorno mínimo</a></li>
                              <li className="divider"></li>
                              <li><a href="#/volumeMedio">Volume médio por Ação</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <div className="container">
        <Movimento items={items} />
      </div></div>)
  }
}

const ItemMovimento = (props) => {
  return (<tr>
    <td>{props.item.id}</td>
    <td>{props.item.date}</td>
    <td>{props.item.close}</td>
    <td>{props.item.volume}</td>
  </tr>)}

const ItemVolume = (props) => {
  return (<tr>
    <td>{props.item.id}</td>
    <td>{props.item.volume}</td>
  </tr>)}


const Movimento = (props) => {
  let items=props.items;

  return (<table className="table table-striped">
      <tbody>
        <tr>
            <th>Ação</th>
            <th>Data</th>
            <th>Fechamento</th>
            <th>Volume</th>
        </tr>
        {items.map(item =><ItemMovimento item={item} />)}
      </tbody>
    </table>)
}

const Volume = (props) => {
  return (<table className="table table-striped">
        <tr>
            <th>Ação</th>
            <th>Volume</th>
        </tr>
        {items.map(item =><ItemVolume item={item} />)}
    </table>)}

export default App
