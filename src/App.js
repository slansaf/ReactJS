import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

function App() {
  return (
    <div>
      <Message name="Москва"/>
      <CurrentTime />

      <div>
        <EventCard title="Группа 1" date="01 марта 2025 года, 16:20" location="Москва"/>
        <EventCard title="Группа 2" date="10 марта 2025 года, 15:40" location="Нижний Новгород"/>
        <EventCard title="Группа 3" date="19 марта 2025 года, 20:10" location="Казань" propsBoolean="false"/>
      </div>
    </div>
  );
}

export default App;
