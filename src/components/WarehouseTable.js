import React from 'react';
import { Table } from 'react-bootstrap';
import WarehouseTableTrCreator from './WarehouseTableTrCreator';

const WarehouseTable = (props) => {
    let i = 1;
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Наименование товара:</th>
                    <th>Количество:</th>
                    <th>Ширина:</th>
                    <th>Длина:</th>
                    <th>Высота:</th>
                    <th>Стоимость за у.е.:</th>
                    <th>Поставщик:</th>
                    <th>Места на складе:</th>
                </tr>
            </thead>
            <tbody>
                {props.arr.map(obj => {
                    return <WarehouseTableTrCreator
                        num={i++}
                        name={obj.name}
                        count={obj.count}
                        width={obj.width}
                        length={obj.length}
                        height={obj.height}
                        cost={obj.cost}
                        supplier={obj.supplier}
                        placeId={obj.placeId}
                        key={obj.id}
                    />;
                    i += 1;
                })}

            </tbody>
        </Table>
    )
}

export default WarehouseTable;