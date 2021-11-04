import React from 'react';
import './App.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function App() {
  
  return (
    <div className="App">
      <h1>🐿 DoTory 🐿</h1>
      
      <nav>
        <ul className="nav-container">
          <li className = "nav-item"><a href ="">Checklist</a></li>
          <li className = "nav-item"><a href ="">Diary</a></li>
          <li className = "nav-item"><a href ="">Pocket</a></li>
        </ul>
      </nav>

      <div className="App">
      <FullCalendar className="main-calendar"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
      />
    </div>

    </div>
  );
}

export default App;

