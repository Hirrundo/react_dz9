import { useState } from 'react';
import './App.css';

function UserCard({ name, age, color }) {
  console.log('Ререндер UserCard');

  return (
    <div
      style={{
        backgroundColor: color,
        padding: '20px',
        margin: '20px 0',
        borderRadius: '10px',
        color: '#ffffff',
      }}
    >
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Цвет карточки: {color}</p>
    </div>
  );
}

function App() {
  const [age, setAge] = useState(20);
  const [color, setColor] = useState('#6c5ce7');

  const colors = ['#6c5ce7', '#e84393', '#0984e3', '#00b894'];
  const [colorIndex, setColorIndex] = useState(0);

  function changeAge() {
    setAge((prevAge) => prevAge + 1);
  }

  function changeColor() {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
    setColor(colors[nextIndex]);
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h1>Карточка пользователя</h1>

      <UserCard
        name="Лиза"
        age={age}
        color={color}
      />

      <button onClick={changeAge}>
        Изменить возраст
      </button>

      <button onClick={changeColor} style={{ marginLeft: '10px' }}>
        Изменить цвет
      </button>
    </div>
  );
}

export default App;