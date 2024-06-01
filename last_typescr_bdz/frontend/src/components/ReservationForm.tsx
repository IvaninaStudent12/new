import React, { useState } from 'react';

interface ReservationFormProps {
    onSearch: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSearch }) => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [date, setDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [trainClass, setTrainClass] = useState('second');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="from-city">От (град):</label>
            <input
                type="text"
                id="from-city"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                required
            />
            <label htmlFor="to-city">До (град):</label>
            <input
                type="text"
                id="to-city"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                required
            />
            <label htmlFor="date">Дата:</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <label htmlFor="adults">Брой възрастни:</label>
            <input
                type="number"
                id="adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                min="1"
                required
            />
            <label htmlFor="children">Брой непълнолетни:</label>
            <input
                type="number"
                id="children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                min="0"
                required
            />
            <label htmlFor="class">Класа на влака:</label>
            <select
                id="class"
                value={trainClass}
                onChange={(e) => setTrainClass(e.target.value)}
                required
            >
                <option value="first">First</option>
                <option value="second">Second</option>
            </select>
            <button type="submit">Търсене</button>
        </form>
    );
};

export default ReservationForm;
