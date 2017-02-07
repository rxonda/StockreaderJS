import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
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
    )
  }
}


const Movimento = (props) => {
  return (<table className="table table-striped">
        <tr>
            <th>Ação</th>
            <th>Data</th>
            <th>Fechamento</th>
            <th>Volume</th>
        </tr>
        <tr>
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.close}</td>
            <td>{props.volume}</td>
        </tr>
    </table>)
}

const Volume = (props) => {
  return (
    <table className="table table-striped">
        <tr>
            <th>Ação</th>
            <th>Volume</th>
        </tr>
        <tr>
            <td>{props.id}</td>
            <td>{props.volume}</td>
        </tr>
    </table>
      )
}

export default App
