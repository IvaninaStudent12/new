import React from 'react';

interface TicketProps {
    user: string | null;
}

const Ticket: React.FC<TicketProps> = ({ user }) => {
    return (
        <div>
            <h2>Вашият билет</h2>
            <p>Име на потребителя: {user}</p>
            <p>Телефонен номер: [номер]</p>
            <p>Име на влака: Train 2</p>
            <p>Дата на тръгване: [дата]</p>
            <p>Час на тръгване: 08:00</p>
            <p>Час на пристигане: 12:00</p>
        </div>
    );
};

export default Ticket;
