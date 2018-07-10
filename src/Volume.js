import React from 'react';

const ItemVolume = ({item}) => {
  return (<tr>
    <td>{item.id}</td>
    <td>{item.volume}</td>
  </tr>)
};

const Volume = ({items}) => {
  return (<table className="table table-striped">
    <tbody>
        <tr>
            <th>Ação</th>
            <th>Volume</th>
        </tr>
        {items.map(item =><ItemVolume item={item} />)}
    </tbody>
</table>);
}

export default Volume;