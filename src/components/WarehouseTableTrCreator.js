import React from 'react';

const WarehouseTableTrCreator = (props) => {
    return (
        <tr>
            <td>{props.num}</td>
            <td>{props.name}</td>
            <td>{props.count !== undefined ? props.count : 'Товар отсутствует на складе'}</td>
            <td>{props.width}</td>
            <td>{props.length}</td>
            <td>{props.height}</td>
            <td>{props.cost}</td>
            <td>{props.supplier}</td>
            <td>{props.placeId !== undefined ? props.placeId.reduce((acc, pl) => acc === '' ? `'${pl}'` : `${acc}, '${pl}'`, '') : `-`}</td>
        </tr>
    )
}

export default WarehouseTableTrCreator;