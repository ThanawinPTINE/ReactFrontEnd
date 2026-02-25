import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

function App() {
  const helloData = [
    { name: 'Thanawin', message: 'Hi there'},
    { name: 'John', message: 'Hello'},
  ]

  return (
    <div className="App">
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="thanawin@example.com" phone="0812345678" />
    </div>
  )
}

export default App;
