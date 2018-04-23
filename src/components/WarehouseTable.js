import React, { Component } from 'react';
// import './Main.css';
import { ControlLabel, FormControl, FormGroup, Table } from 'react-bootstrap';
import WarehouseTableTrCreator from './WarehouseTableTrCreator';

const WarehouseTable = (props) => {
    console.log(props.arr);
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
                {console.log(props.arr)};
                {props.arr.map(obj =>
                    <WarehouseTableTrCreator
                        name={obj.name}
                        count={obj.count}
                        width={obj.width}
                        length={obj.length}
                        height={obj.height}
                        cost={obj.cost}
                        supplier={obj.supplier}
                        placeId={obj.placeId}
                        key={obj.id}
                    />

                )}

            </tbody>
        </Table>
    )
}

export default WarehouseTable;