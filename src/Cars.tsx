import React from 'react';
import './App.css';
type NewCarsType = {
    auto: Array<AutoType>
}
type AutoType = {
    id: number,
    manufacturer: string,
    model: string
}


export const NewCars = (props: NewCarsType) => {

    return (
        <table className="rama">
            {props.auto.map((objectFromAutoArray, index) => {
                return (
                    <tr className="rama" key={objectFromAutoArray.id}>
                        <td className="rama">{objectFromAutoArray.manufacturer}</td>
                        <td className="rama">{objectFromAutoArray.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};

