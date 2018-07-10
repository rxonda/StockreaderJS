import React from 'react';

const Items = ({items, renderItem, separator}) => {
  return items.map((item, index) => (
    <React.Fragment key={item.id+item.date}>
      {renderItem(Object.assign({}, item, {index: index}))}
      {index !== items.length - 1 && separator}
    </React.Fragment>
  ));
}

const ItemMovimento = ({data, index}) => {
  let options = [
    'pt-BR',
    {year: 'numeric',
    month: 'numeric',
    day: 'numeric'}
  ]
  // let textDate = new Intl.DateTimeFormat('pt-BR', options).format(data);
  let textDate = new Date(data.date).toLocaleString(...options);
  let textClose = new Number(data.close).toLocaleString(...options);

  return (<tr>
    <td col="0" row={index}>{data.id}</td>
    <td col="1" row={index}>{textDate}</td>
    <td col="2" row={index}>{textClose}</td>
    <td col="3" row={index}>{data.volume}</td>
  </tr>);
}

const HeaderMovimento = () => {
  return (<tr>
    <th>Ação</th>
    <th>Data</th>
    <th>Fechamento</th>
    <th>Volume</th>
</tr>);
}
const Movimento = ({items}) => {
  return (<table className="table table-striped">
  <tbody>
    <HeaderMovimento />
    <Items
        items={items}
        renderItem={ item => <ItemMovimento index={item.index} data={item} /> }
        //          separator={<br/>}
    />
  </tbody>
</table>);
}

export default Movimento;
