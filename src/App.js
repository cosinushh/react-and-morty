import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>React and Morty</h2>
      </header>
      <main>
        <article>
          <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
          <h2>Morty Smith</h2>
          <button>Show more</button>
        </article>
      </main>
      <footer>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'blue' }}>Nav 1</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'red' }}>Nav 2</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'green' }}>Nav 3</div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, backgroundColor: 'yellow' }}>Nav 4</div>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
