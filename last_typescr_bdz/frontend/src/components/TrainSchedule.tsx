import React from 'react';

interface TrainScheduleProps {
    onReserve: () => void;
}

const TrainSchedule: React.FC<TrainScheduleProps> = ({ onReserve }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Име на влака</th>
                <th>Час на тръгване</th>
                <th>Час на пристигане</th>
                <th>Цена на билета</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Train 2</td>
                <td>08:00</td>
                <td>12:00</td>
                <td>35 лева</td>
                <td><button onClick={onReserve}>Запазване</button></td>
            </tr>
            </tbody>
        </table>
    );
};

export default TrainSchedule;
