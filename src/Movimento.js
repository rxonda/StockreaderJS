import React from 'react';

const ItemMovimento = (props) => {
  let options = [
    'pt-BR',
    {year: 'numeric',
    month: 'numeric',
    day: 'numeric'}
  ]
  // let textDate = new Intl.DateTimeFormat('pt-BR', options).format(data);
  let textDate = new Date(props.item.date).toLocaleString(...options);
  let textClose = new Number(props.item.close).toLocaleString(...options);

  return (<tr>
    <td>{props.item.id}</td>
    <td>{textDate}</td>
    <td>{textClose}</td>
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

export default Movimento
