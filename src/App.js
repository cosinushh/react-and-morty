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
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 15 }}>
            <li>
              <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
            </li>
            <li>
              <div style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'purple' }}></div>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
