import React, { useState } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import ReservationForm from './components/ReservationForm';
import TrainSchedule from './components/TrainSchedule';
import Ticket from './components/Ticket';
import './App.css';  // Добавяме CSS за App

const App: React.FC = () => {
    const [user, setUser] = useState<string | null>(null);
    const [view, setView] = useState<string>('home');

    const handleLogin = (username: string) => {
        setUser(username);
        setView('reservation');
    };

    const handleReservation = () => {
        setView('schedule');
    };

    const handleSchedule = () => {
        setView('ticket');
    };

    return (
        <div>
            <Header user={user} setView={setView} />
            <main>
                {view === 'home' && (
                    <p>Здравейте, това е сайт за запазване и резервиране на БДЖ билети.</p>
                )}
                {view === 'login' && <LoginForm onLogin={handleLogin} />}
                {view === 'reservation' && <ReservationForm onSearch={handleReservation} />}
                {view === 'schedule' && <TrainSchedule onReserve={handleSchedule} />}
                {view === 'ticket' && <Ticket user={user} />}
            </main>
        </div>
    );
};

export default App;
